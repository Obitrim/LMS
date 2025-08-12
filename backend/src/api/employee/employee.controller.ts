import { Request, Response } from "express";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { StatusCodes } from "http-status-codes";
import employeeService from "./employee.service";

export class EmployeeController {
  static async create(req: Request, res: Response) {
    try {
      const serviceResponse = await employeeService.create(req.body);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      EmployeeController.handleError(res, error);
    }
  }

  static async fetchAll(req: Request, res: Response) {
    try {
      const resObj = await employeeService.fetchAll();
      return res.status(resObj.statusCode).json(resObj);
    } catch (error: any) {
      EmployeeController.handleError(res, error);
    }
  }

  private static handleError(res: Response, error: any) {
    const resObj = ServiceResponse.failure(
      error.message,
      null,
      StatusCodes.BAD_REQUEST
    );
    return res.status(resObj.statusCode).json(resObj);
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const serviceResponse = await employeeService.delete(id);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      EmployeeController.handleError(res, error);
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const serviceResponse = await employeeService.update(id, req.body);
      res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (error: any) {
      EmployeeController.handleError(res, error);
    }
  }
}
