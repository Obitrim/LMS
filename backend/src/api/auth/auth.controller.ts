import { Request, Response } from "express";
import { authService } from "./auth.service";

export class AuthController {
  static async signup(req: Request, res: Response) {
    try {
      const serviceResponse = await authService.signup(req.body);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async onboard(req: Request, res: Response) {
    try {
      const serviceResponse = await authService.onboard(req.body);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const serviceResponse = await authService.login(req.body);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async refreshToken(req: Request, res: Response) {
    try {
      const serviceResponse = await authService.refreshToken(req.body);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async logout(req: Request, res: Response) {
    try {
      const serviceResponse = await authService.logout(req.body);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
