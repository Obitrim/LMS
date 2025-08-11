import * as argon2 from "argon2";
import jwt from "jsonwebtoken";

import { env } from "@/common/utils/envConfig";
import { ServiceResponse } from "@/common/models/serviceResponse";
import {
  AuthResponse,
  JWTData,
  LoginDto,
  RefreshTokenDto,
  SignupDto,
} from "./auth.model";
import { StatusCodes } from "http-status-codes";
import db from "@/common/utils/prisma.util";
import { OnboardingStatus, Role } from "@/common/lib/prisma";
import { logger } from "@/server";

export class AuthService {
  private readonly JWT_SECRET = env.JWT_SECRET;
  private readonly JWT_REFRESH_SECRET = env.JWT_REFRESH_SECRET;
  private readonly JWT_EXPIRES_IN = "1h";
  private readonly JWT_REFRESH_EXPIRES_IN = "7d";

  // Generate JWT token
  private generateToken(payload: {
    user_id: string;
    organization_id: string;
  }): string {
    return jwt.sign(payload, this.JWT_SECRET, {
      expiresIn: this.JWT_EXPIRES_IN,
    });
  }

  // Generate refresh token
  private generateRefreshToken(payload: {
    user_id: string;
    organization_id: string;
  }): string {
    return jwt.sign(payload, this.JWT_REFRESH_SECRET, {
      expiresIn: this.JWT_REFRESH_EXPIRES_IN,
    });
  }

  // Hash password
  private async hashPassword(password: string): Promise<string> {
    return await argon2.hash(password);
  }

  // Compare password
  private async comparePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await argon2.verify(hashedPassword, password);
  }

  async onboard(body: any) {
    return ServiceResponse.failure("error", {});
  }

  // User signup
  async signup(
    signupData: SignupDto
  ): Promise<ServiceResponse<AuthResponse | null>> {
    try {
      // Check if user already exists
      const existingUser = await db.user.findUnique({
        where: { email: signupData.email },
      });

      if (existingUser) {
        return ServiceResponse.failure(
          "User with this email already exists",
          null,
          StatusCodes.CONFLICT
        );
      }

      // Create user (Note: You'll need to add password field to your schema)
      const newOrganization = await db.organization.create({
        data: {
          name: signupData.organization_name,
          email: signupData.email,
          status: OnboardingStatus.LOCATION,
        },
        select: { id: true },
      });

      // Hash password
      const hashedPassword = await this.hashPassword(signupData.password);

      const newUser = await db.user.create({
        data: {
          email: signupData.email,
          password: hashedPassword,
          role: Role.ADMIN,
          organization_id: newOrganization.id,
        },
        include: {
          organization: true,
        },
      });

      // Generate tokens
      const token = this.generateToken({
        user_id: newOrganization.id,
        organization_id: newOrganization.id,
      });

      const refreshToken = this.generateRefreshToken({
        user_id: newOrganization.id,
        organization_id: newOrganization.id,
      });

      // Store refresh token (you might want to create a separate table for this)
      const NUMBER_OF_DAYS = 7;
      const HOURS_IN_A_DAY = 24;
      const MINUTES_IN_AN_HOUR = 60;
      const SECONDS_IN_A_MINUTE = 60;
      const MILLISECONDS_IN_A_SECOND = 1000;

      await db.refreshToken.create({
        data: {
          token: refreshToken,
          expires_at: new Date(
            Date.now() +
              NUMBER_OF_DAYS *
                HOURS_IN_A_DAY *
                MINUTES_IN_AN_HOUR *
                SECONDS_IN_A_MINUTE *
                MILLISECONDS_IN_A_SECOND
          ).toISOString(),
          user_id: newUser.id, // 7 days
        },
      });

      const authResponse: AuthResponse = {
        user: newUser,
        token,
        refresh_token: refreshToken,
      };

      return ServiceResponse.success<AuthResponse>(
        "Account created successfully",
        authResponse,
        StatusCodes.CREATED
      );
    } catch (error: any) {
      const errorMessage = `Error during signup: ${(error as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        error.message,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  //   // User login
  async login(
    loginData: LoginDto
  ): Promise<ServiceResponse<AuthResponse | null>> {
    try {
      const user = await db.user.findFirst({
        where: {
          email: loginData.email,
        },
        include: {
          organization: true,
        },
      });

      if (!user) {
        return ServiceResponse.failure(
          "Invalid email or password",
          null,
          StatusCodes.UNAUTHORIZED
        );
      }

      // Check password (uncomment when you add password field)
      const isPasswordValid = await this.comparePassword(
        loginData.password,
        user.password
      );

      if (!isPasswordValid) {
        return ServiceResponse.failure(
          "Invalid email or password",
          null,
          StatusCodes.UNAUTHORIZED
        );
      }

      // Generate tokens
      const token = this.generateToken({
        user_id: user.id,
        organization_id: user.organization.id,
      });
      const refreshToken = this.generateRefreshToken({
        user_id: user.id,
        organization_id: user.organization.id,
      });

      await db.refreshToken.update({
        where: {
          user_id: user.id,
        },
        data: { token: refreshToken },
      });

      const authResponse: AuthResponse = {
        user,
        token,
        refresh_token: refreshToken,
      };

      return ServiceResponse.success<AuthResponse>(
        "Login successful",
        authResponse,
        StatusCodes.OK
      );
    } catch (error) {
      const errorMessage = `Error during login: ${(error as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred during login",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // Refresh token
  async refreshToken(
    refreshTokenData: RefreshTokenDto
  ): Promise<ServiceResponse<{ token: string } | null>> {
    console.log({ refreshTokenData });
    try {
      // Verify refresh token
      const decoded = jwt.verify(
        refreshTokenData.refresh_token,
        this.JWT_REFRESH_SECRET
      ) as JWTData;

      // Check if refresh token exists in database (you might want to create a separate table for this)
      const storedToken = await db.refreshToken.findFirst({
        where: {
          token: refreshTokenData.refresh_token,
          user_id: decoded.user_id,
        },
      });

      if (!storedToken) {
        return ServiceResponse.failure(
          "Invalid refresh token",
          null,
          StatusCodes.NOT_FOUND
        );
      }

      // Generate new access token
      const newToken = this.generateToken({
        user_id: decoded.user_id,
        organization_id: decoded.organization_id,
      });

      return ServiceResponse.success<{ token: string }>(
        "Token refreshed successfully",
        { token: newToken },
        StatusCodes.OK
      );
    } catch (error: any) {
      const errorMessage = `Error refreshing token: ${
        (error as Error).message
      }`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        error.message,
        null,
        StatusCodes.UNAUTHORIZED
      );
    }
  }

  // Logout
  async logout(
    refreshTokenData: RefreshTokenDto
  ): Promise<ServiceResponse<null>> {
    try {
      await db.refreshToken.deleteMany({
        where: { token: refreshTokenData.refresh_token },
      });

      return ServiceResponse.success<null>(
        "Logged out successfully",
        null,
        StatusCodes.OK
      );
    } catch (error) {
      const errorMessage = `Error during logout: ${(error as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred during logout",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // Verify token middleware helper
  verifyToken(token: string): { userId: string; email: string } | null {
    try {
      return jwt.verify(token, this.JWT_SECRET) as {
        userId: string;
        email: string;
      };
    } catch (error) {
      return null;
    }
  }
}

export const authService = new AuthService();
