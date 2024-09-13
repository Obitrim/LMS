export interface ILeave {
  type: string;
  startDate: string;
  endDate: string;
}

export interface IPerformanceReview {
  date: string;
  summary: string;
}

export interface ITrainingCertification {
  certification: string;
}

export interface ISkill {
  skill: string;
}

export interface IGoalObjective {
  goal: string;
  dueDate: string;
}

export interface IEmergencyContact {
  name: string;
  relationship: string;
  phoneNumber: string;
  email: string;
}

export interface IEmployee {
  employeeID: string;
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  gender: string;
  emailAddress: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  jobTitle: string;
  department: string;
  position: string;
  role: string;
  employmentType: string;
  dateOfHire: string;
  employeeStatus: string;
  salary: number;
  payGrade: string;
  bonus: number;
  commission: number;
  benefits: string[];
  workHours: string;
  workLocation: string;
  shift: string;
  annualLeaveEntitlement: number;
  sickLeaveEntitlement: number;
  leaveBalance: number;
  leaveHistory: ILeave[];
  performanceReviews: IPerformanceReview[];
  trainingCertifications: string[];
  skills: string[];
  goalsObjectives: IGoalObjective[];
  emergencyContact: IEmergencyContact;
  nationality: string;
  maritalStatus: string;
  dependents: number;
  employeePhoto: string;
  notes: string;
  username: string;
  password: string;
  accessLevel: string;
}


export interface IEmployeeHelperThis {
    employee: IEmployee;
}