const router = express.Router();
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";
import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { AuthController } from "./auth.controller";
import {
  AuthResponseSchema,
  LoginSchema,
  OnboardRequestHeaderSchema,
  OnboardRequestSchema,
  RefreshTokenResponseSchema,
  RefreshTokenSchema,
  SignupSchema,
} from "./auth.model";
import requireAuthentication from "@/common/middleware/requireAuthentication";
import { OrganizationSchema } from "@/common/lib/zod";

export const authRegistry = new OpenAPIRegistry();
export const authRouter: Router = express.Router();

/**
 * Signup
 *
 */
authRegistry.registerPath({
  method: "post",
  path: "/auth/signup",
  tags: ["Auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: SignupSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(AuthResponseSchema, "Success"),
});
authRouter.post(
  "/signup",
  validateRequest(SignupSchema),
  AuthController.signup
);

/**
 * Login
 */
authRegistry.registerPath({
  method: "post",
  path: "/auth/login",
  tags: ["Auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: LoginSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(AuthResponseSchema, "Success"),
});
authRouter.post("/login", validateRequest(LoginSchema), AuthController.login);

/**
 * Onboard Organization
 *
 */
authRegistry.registerPath({
  method: "patch",
  path: "/auth/onboard",
  tags: ["Auth", "Onboarding"],
  request: {
    headers: OnboardRequestHeaderSchema,
    body: {
      content: {
        "application/json": {
          schema: OnboardRequestSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(OrganizationSchema, "Success"),
});
authRouter.patch(
  "/onboard",
  requireAuthentication,
  validateRequest(OnboardRequestSchema),
  AuthController.onboard
);

/**
 * Refresh Token
 *
 */
authRegistry.registerPath({
  method: "post",
  path: "/auth/refresh-token",
  tags: ["Auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: RefreshTokenSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(RefreshTokenResponseSchema, "Success"),
});
authRouter.post(
  "/refresh-token",
  validateRequest(RefreshTokenSchema),
  AuthController.refreshToken
);

/**
 * Logout
 */
authRegistry.registerPath({
  method: "post",
  path: "/auth/logout",
  tags: ["Auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: RefreshTokenSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(z.null(), "Success"),
});
authRouter.post(
  "/logout",
  validateRequest(RefreshTokenSchema),
  AuthController.logout
);
