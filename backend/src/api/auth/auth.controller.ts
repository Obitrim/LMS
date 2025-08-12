import { Request, Response } from "express";
import { authService } from "./auth.service";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { StatusCodes } from "http-status-codes";

export class AuthController {
  static async signup(req: Request, res: Response) {
    try {
      const serviceResponse = await authService.signup(req.body);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      const errorRes = ServiceResponse.failure(
        error.message,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(errorRes.statusCode).json(errorRes);
    }
  }

  static async onboard(req: Request, res: Response) {
    try {
      const serviceResponse = await authService.onboard(req.body);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      const errorRes = ServiceResponse.failure(
        error.message,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(errorRes.statusCode).json(errorRes);
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const serviceResponse = await authService.login(req.body);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      const errorRes = ServiceResponse.failure(
        error.message,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(errorRes.statusCode).json(errorRes);
    }
  }

  static async refreshToken(req: Request, res: Response) {
    try {
      const serviceResponse = await authService.refreshToken(req.body);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      const errorRes = ServiceResponse.failure(
        error.message,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(errorRes.statusCode).json(errorRes);
    }
  }

  static async logout(req: Request, res: Response) {
    try {
      const serviceResponse = await authService.logout(req.body);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      const errorRes = ServiceResponse.failure(
        error.message,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
      res.status(errorRes.statusCode).json(errorRes);
    }
  }
}
