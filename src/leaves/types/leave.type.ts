import type { IEmployee } from '@/employees/types/employee.type';

export interface ILeave {
  id: string;
  employee: Partial<IEmployee>;
  leaveType: string;
  startDate: string;

  endDate?: string; // Optional for partial leaves within a single day
  exceptions: { date: string; periods: ('morning' | 'afternoon' | 'evening')[] }[];
}
