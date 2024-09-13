import type { IEmployee, IEmployeeHelperThis } from '@/employees/types/employee.type';

function EmployeeHelper(this: IEmployeeHelperThis, employee: IEmployee) {
  this.employee = employee;
}

EmployeeHelper.prototype.getFullName = function () {
  return `${this.employee.lastName} ${this.employee.firstName}`;
};

export default EmployeeHelper;
