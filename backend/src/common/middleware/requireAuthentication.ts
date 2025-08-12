import { NextFunction, Request, Response } from "express";
import { authService } from "@/api/auth/auth.service";
import { StatusCodes } from "http-status-codes";
import { ServiceResponse } from "../models/serviceResponse";

const requireAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      const resObj = ServiceResponse.failure(
        "No token found",
        null,
        StatusCodes.UNAUTHORIZED
      );
      return res.status(resObj.statusCode).json(resObj);
    }

    const decodedToken = await authService.verifyToken(token);
    if (!decodedToken) {
      const resObj = ServiceResponse.failure(
        "Invalid token",
        null,
        StatusCodes.UNAUTHORIZED
      );
      return res.status(resObj.statusCode).json(resObj);
    }

    // req.auth = decodedToken;

    next();
  } catch (error: any) {
    const resObj = ServiceResponse.failure(
      error.message,
      null,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    return res.status(resObj.statusCode).json(resObj);
  }
};

export default requireAuthentication;
