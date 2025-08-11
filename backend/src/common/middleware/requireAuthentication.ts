import { NextFunction, Request, Response } from "express";
import { authService } from "@/api/auth/auth.service";
import { StatusCodes } from "http-status-codes";

const requireAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "Unauthorized" });
    }

    const decodedToken = await authService.verifyToken(token);
    if (!decodedToken) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: "Unauthorized" });
    }

    // req.auth = decodedToken;

    next();
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export default requireAuthentication;
