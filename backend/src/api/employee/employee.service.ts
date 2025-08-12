import db from "@/common/utils/prisma.util";
import { CreateEmployeeDto } from "./employee.model";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { StatusCodes } from "http-status-codes";
export class EmployeeService {
  /**
   * Checks if an employee with the given email already exists in the database.
   *
   * @param {string} email - The email to check.
   * @throws {Error} Throws an error if an employee with the given email already exists.
   */
  private async emailExists(email: string) {
    const existingEmployee = await db.employee.findFirst({
      where: { email },
      select: { id: true },
    });

    if (existingEmployee) {
      throw new Error("Employee with this email already exists.");
    }
  }

  /**
   * Checks if an employee with the given employee number already exists in the database.
   *
   * @param {string} employee_no - The employee number to check.
   * @returns {boolean} Returns true if an employee with the given employee number exists, false otherwise.
   */
  private async employeeIDExists(employee_no: string) {
    const existingEmployeeNumber = await db.employee.findFirst({
      where: { employee_no },
      select: { id: true },
    });

    return !!existingEmployeeNumber;
  }

  /**
   * Generates a new unique employee ID based on the last existing employee ID.
   *
   * @returns {string} Returns a new unique employee ID.
   */
  private async getNextEmployeeID() {
    const lastEmployee = await db.employee.findFirst({
      orderBy: { created_at: "desc" },
      select: { employee_no: true },
    });
    const lastEmployeeNo = lastEmployee?.employee_no;
    const lastNo = lastEmployeeNo?.match(/E(\d+)(\d{2})$/)![1] ?? "0";
    const employeeNoNumber = lastEmployeeNo ? parseInt(lastNo) : 0;

    const employeeNumber = `${employeeNoNumber < 10 ? 0 : ""}${
      employeeNoNumber < 100 ? 0 : ""
    }${employeeNoNumber + 1}`;

    const newID = `E${employeeNumber}${new Date().getFullYear() % 100}`;
    const idExists = await this.employeeIDExists(newID);

    if (idExists) await this.getNextEmployeeID();

    return newID;
  }

  /**
   * Creates a new employee and their contract in the database.
   *
   * @param {CreateEmployeeDto} data - The data for the new employee and contract.
   * @returns {ServiceResponse} Returns a ServiceResponse object containing the new employee, a success message, and a status code.
   */
  async create(data: CreateEmployeeDto) {
    try {
      await this.emailExists(data.email);
      const employeeID = await this.getNextEmployeeID();

      const newEmployee = await db.employee.create({
        data: {
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          date_of_birth: data.date_of_birth,
          position: data.position,
          organization_id: data.organization_id,
          employee_no: employeeID,
          contracts: {
            create: {
              position: data.position,
              amount: data.amount,
              file_url: data.file_url,
              contract_type: data.contract_type,
              start_date: data.start_date,
              organization_id: data.organization_id,
              end_date: data.end_date,
              status: data.status,
            },
          },
        },
        include: {
          contracts: true,
        },
      });

      return ServiceResponse.success(
        "Employee and contract created successfully",
        newEmployee,
        StatusCodes.CREATED
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   * Fetches all employees from the database.
   *
   * @returns {ServiceResponse} A ServiceResponse object containing the list of employees, a success message, and a status code.
   */
  async fetchAll() {
    try {
      const employeeList = await db.employee.findMany();
      return ServiceResponse.success(
        "Employees fetched",
        employeeList,
        StatusCodes.OK
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates an existing employee in the database.
   *
   * @param {string} id - The ID of the employee to update.
   * @param {any} body - The update data for the employee.
   * @returns {ServiceResponse} Returns a ServiceResponse object containing the updated employee, a success message, and a status code.
   */
  async update(id: string, body: any) {
    try {
      const updatedEmployee = await db.employee.update({
        where: { id },
        data: body,
      });

      return ServiceResponse.success(
        "Employee updated successfully",
        updatedEmployee,
        StatusCodes.OK
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes an existing employee from the database.
   *
   * @param {string} id - The ID of the employee to delete.
   * @returns {ServiceResponse} Returns a ServiceResponse object containing the deleted employee, a success message, and a status code.
   */
  async delete(id: string) {
    try {
      const deletedEmployee = await db.employee.delete({
        where: { id },
      });

      return ServiceResponse.success(
        "Employee deleted successfully",
        deletedEmployee,
        StatusCodes.OK
      );
    } catch (error) {
      throw error;
    }
  }
}

export default new EmployeeService();
