import { Router } from "express";

import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { EmployeeController } from "./employee.controller";
import requireAuthentication from "@/common/middleware/requireAuthentication";
import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { StatusCodes } from "http-status-codes";
import {
  CreateEmployeeSchema,
  DeleteEmployeeSchema,
  UpdateEmployeeSchema,
} from "./employee.model";
import { validateRequest } from "@/common/utils/httpHandlers";
import { EmployeeSchema } from "@/common/lib/zod";

const employeeRouter = Router();

const employeeRegistry = new OpenAPIRegistry();

/**
 * Registers the path for fetching all employees.
 *
 * This function registers the GET method for fetching all employees.
 * It specifies the path, description, tags, response schema, and status code.
 */
employeeRegistry.registerPath({
  method: "get",
  path: "/api/employees",
  description: "Get all employees",
  tags: ["Employees"],
  responses: createApiResponse(
    EmployeeSchema.array(),
    "Employees fetched",
    StatusCodes.OK
  ),
});
/**
 * Handles the GET request for fetching all employees.
 *
 * This function maps the GET request to the EmployeeController's fetchAll method.
 * It requires authentication before processing the request.
 */
employeeRouter.get("/", requireAuthentication, EmployeeController.fetchAll);

/**
 * Registers the path for creating a new employee.
 *
 * This function registers the POST method for creating a new employee.
 * It specifies the path, description, tags, request body schema, and response schema.
 */
employeeRegistry.registerPath({
  method: "post",
  path: "/api/employees",
  description: "Create a new employee",
  tags: ["Employees"],
  request: {
    body: {
      content: {
        "application/json": { schema: CreateEmployeeSchema.shape.body },
      },
    },
  },
  responses: createApiResponse(EmployeeSchema, "Employee created"),
});
/**
 * Handles the POST request for creating a new employee.
 *
 * This function maps the POST request to the EmployeeController's create method.
 * It requires authentication and validates the request body before processing the request.
 */
employeeRouter.post(
  "/",
  requireAuthentication,
  validateRequest(CreateEmployeeSchema),
  EmployeeController.create
);
/**
 * Registers the path for updating an employee.
 *
 * This function registers the PUT method for updating an employee with the given ID.
 * It specifies the path, description, tags, request body schema, and response schema.
 *
 * @param {Object} pathRegistration - The object containing the path registration details.
 */
employeeRegistry.registerPath({
  method: "put",
  path: "/api/employees/:id",
  description: "Update an employee",
  tags: ["Employees"],
  request: {
    body: {
      content: {
        "application/json": { schema: UpdateEmployeeSchema.shape.body },
      },
    },
  },
  responses: createApiResponse(EmployeeSchema, "Employee updated"),
});
/**
 * Handles the PUT request for updating an employee.
 *
 * This function maps the PUT request to the EmployeeController's update method.
 * It requires authentication before processing the request.
 *
 * @param {string} id - The ID of the employee to update.
 */
employeeRouter.put(
  "/:id",
  requireAuthentication,
  validateRequest(UpdateEmployeeSchema),
  EmployeeController.update
);

/**
 * Registers the path for deleting an employee.
 *
 * This function registers the DELETE method for deleting an employee with the given ID.
 * It specifies the path, description, tags, and response schema.
 *
 * @param {Object} pathRegistration - The object containing the path registration details.
 */
employeeRegistry.registerPath({
  method: "delete",
  path: "/api/employees/:id",
  description: "Delete an employee",
  tags: ["Employees"],
  responses: createApiResponse(EmployeeSchema, "Employee deleted"),
});
/**
 * Handles the DELETE request for deleting an employee.
 *
 * This function maps the DELETE request to the EmployeeController's delete method.
 * It requires authentication before processing the request.
 *
 * @param {string} id - The ID of the employee to delete.
 */
employeeRouter.delete(
  "/:id",
  requireAuthentication,
  validateRequest(DeleteEmployeeSchema),
  EmployeeController.delete
);

export { employeeRouter, employeeRegistry };
