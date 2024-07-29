import type { IEmployee } from '@/types/employee.type';

export const employeeList: IEmployee[] = [
  {
    employeeID: 'E12345',
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'A',
    dateOfBirth: '1985-06-15',
    gender: 'Male',
    emailAddress: 'john.doe@example.com',
    phoneNumber: '+1234567890',
    addressLine1: '123 Main St',
    addressLine2: 'Apt 4B',
    city: 'Anytown',
    state: 'CA',
    postalCode: '12345',
    country: 'USA',
    jobTitle: 'Software Engineer',
    department: 'IT',
    position: 'Senior',
    role: 'Developer',
    employmentType: 'Full-time',
    dateOfHire: '2015-08-01',
    employeeStatus: 'Active',
    salary: 90000,
    payGrade: 'Level 3',
    bonus: 5000,
    commission: 0,
    benefits: ['Health Insurance', '401k'],
    workHours: '9 AM - 5 PM',
    workLocation: 'Remote',
    shift: 'Day',
    annualLeaveEntitlement: 20,
    sickLeaveEntitlement: 10,
    leaveBalance: 15,
    leaveHistory: [
      { type: 'Annual', startDate: '2023-06-01', endDate: '2023-06-10' },
      { type: 'Sick', startDate: '2023-07-15', endDate: '2023-07-17' }
    ],
    performanceReviews: [
      { date: '2023-01-01', summary: 'Exceeds expectations' },
      { date: '2022-01-01', summary: 'Meets expectations' }
    ],
    trainingCertifications: ['Certified Java Developer', 'Agile Scrum Master'],
    skills: ['Java', 'Spring', 'React'],
    goalsObjectives: [{ goal: 'Complete the XYZ project', dueDate: '2024-12-31' }],
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phoneNumber: '+1234567891',
      email: 'jane.doe@example.com'
    },
    nationality: 'American',
    maritalStatus: 'Married',
    dependents: 2,
    employeePhoto: 'https://example.com/photos/johndoe.jpg',
    notes: 'Great team player',
    username: 'johndoe',
    password: 'hashedpassword',
    accessLevel: 'User'
  },
  {
    employeeID: 'E12346',
    firstName: 'Alice',
    lastName: 'Smith',
    middleName: 'B',
    dateOfBirth: '1990-04-12',
    gender: 'Female',
    emailAddress: 'alice.smith@example.com',
    phoneNumber: '+1234567892',
    addressLine1: '456 Oak St',
    addressLine2: '',
    city: 'Othertown',
    state: 'NY',
    postalCode: '67890',
    country: 'USA',
    jobTitle: 'Marketing Manager',
    department: 'Marketing',
    position: 'Lead',
    role: 'Manager',
    employmentType: 'Full-time',
    dateOfHire: '2018-05-15',
    employeeStatus: 'Active',
    salary: 80000,
    payGrade: 'Level 2',
    bonus: 4000,
    commission: 1000,
    benefits: ['Health Insurance', '401k', 'Stock Options'],
    workHours: '9 AM - 5 PM',
    workLocation: 'Office',
    shift: 'Day',
    annualLeaveEntitlement: 25,
    sickLeaveEntitlement: 12,
    leaveBalance: 18,
    leaveHistory: [
      { type: 'Annual', startDate: '2023-08-01', endDate: '2023-08-10' },
      { type: 'Sick', startDate: '2023-09-05', endDate: '2023-09-06' }
    ],
    performanceReviews: [
      { date: '2023-02-01', summary: 'Outstanding performance' },
      { date: '2022-02-01', summary: 'Above average' }
    ],
    trainingCertifications: ['Digital Marketing Expert', 'Leadership Training'],
    skills: ['SEO', 'Content Marketing', 'Team Leadership'],
    goalsObjectives: [{ goal: 'Increase brand awareness by 20%', dueDate: '2024-06-30' }],
    emergencyContact: {
      name: 'Bob Smith',
      relationship: 'Brother',
      phoneNumber: '+1234567893',
      email: 'bob.smith@example.com'
    },
    nationality: 'American',
    maritalStatus: 'Single',
    dependents: 0,
    employeePhoto: 'https://example.com/photos/alicesmith.jpg',
    notes: 'Excellent at team building',
    username: 'alicesmith',
    password: 'hashedpassword',
    accessLevel: 'User'
  },
  {
    employeeID: 'E12347',
    firstName: 'Michael',
    lastName: 'Johnson',
    middleName: 'C',
    dateOfBirth: '1980-10-22',
    gender: 'Male',
    emailAddress: 'michael.johnson@example.com',
    phoneNumber: '+1234567894',
    addressLine1: '789 Pine St',
    addressLine2: 'Suite 100',
    city: 'Sometown',
    state: 'TX',
    postalCode: '54321',
    country: 'USA',
    jobTitle: 'HR Specialist',
    department: 'HR',
    position: 'Senior',
    role: 'Specialist',
    employmentType: 'Full-time',
    dateOfHire: '2010-11-20',
    employeeStatus: 'Active',
    salary: 70000,
    payGrade: 'Level 3',
    bonus: 3500,
    commission: 0,
    benefits: ['Health Insurance', '401k', 'Wellness Program'],
    workHours: '8 AM - 4 PM',
    workLocation: 'Office',
    shift: 'Day',
    annualLeaveEntitlement: 20,
    sickLeaveEntitlement: 15,
    leaveBalance: 10,
    leaveHistory: [
      { type: 'Annual', startDate: '2023-04-15', endDate: '2023-04-25' },
      { type: 'Sick', startDate: '2023-05-10', endDate: '2023-05-12' }
    ],
    performanceReviews: [
      { date: '2023-03-01', summary: 'Meets expectations' },
      { date: '2022-03-01', summary: 'Meets expectations' }
    ],
    trainingCertifications: ['HR Management', 'Conflict Resolution'],
    skills: ['Employee Relations', 'Recruitment', 'HR Compliance'],
    goalsObjectives: [{ goal: 'Improve employee retention by 10%', dueDate: '2024-12-31' }],
    emergencyContact: {
      name: 'Sarah Johnson',
      relationship: 'Wife',
      phoneNumber: '+1234567895',
      email: 'sarah.johnson@example.com'
    },
    nationality: 'American',
    maritalStatus: 'Married',
    dependents: 1,
    employeePhoto: 'https://example.com/photos/michaeljohnson.jpg',
    notes: 'Strong problem-solving skills',
    username: 'michaeljohnson',
    password: 'hashedpassword',
    accessLevel: 'Admin'
  },

  {
    employeeID: 'E97776',
    firstName: 'Noah',
    lastName: 'Hannah',
    middleName: 'C',
    dateOfBirth: '1978-03-11',
    gender: 'Female',
    emailAddress: 'noah.victor@example.com',
    phoneNumber: '+9291329591',
    addressLine1: '545 Pine St',
    addressLine2: 'Apt 2',
    city: 'Sometown',
    state: 'CA',
    postalCode: '34909',
    country: 'USA',
    jobTitle: 'HR Specialist',
    department: 'Customer Service',
    position: 'Officer',
    role: 'Analyst',
    employmentType: 'Contract',
    dateOfHire: '2018-04-27',
    employeeStatus: 'On Leave',
    salary: 70229,
    payGrade: 'Level 3',
    bonus: 2968,
    commission: 561,
    benefits: ['Stock Options', 'Health Insurance'],
    workHours: '9 AM - 5 PM',
    workLocation: 'Remote',
    shift: 'Day',
    annualLeaveEntitlement: 11,
    sickLeaveEntitlement: 15,
    leaveBalance: 13,
    leaveHistory: [
      { type: 'Annual', startDate: '2023-07-23', endDate: '2023-01-24' },
      { type: 'Sick', startDate: '2023-08-24', endDate: '2023-09-22' }
    ],
    performanceReviews: [
      { date: '2023-07-01', summary: 'Needs improvement' },
      { date: '2022-09-01', summary: 'Meets expectations' }
    ],
    trainingCertifications: ['Digital Marketing Expert', 'HR Management'],
    skills: ['Team Leadership', 'Recruitment', 'HR Compliance'],
    goalsObjectives: [{ goal: 'Complete the ABC project', dueDate: '2024-10-09' }],
    emergencyContact: {
      name: 'Ian',
      relationship: 'Spouse',
      phoneNumber: '+5645791421',
      email: 'bob.rachel@example.com'
    },
    nationality: 'American',
    maritalStatus: 'Married',
    dependents: 2,
    employeePhoto: 'https://example.com/photos/noaholivia.jpg',
    notes: 'Strong problem-solving skills',
    username: 'noahfiona',
    password: 'hashedpassword',
    accessLevel: 'User'
  },
  {
    employeeID: 'E81499',
    firstName: 'Yara',
    lastName: 'Liam',
    middleName: 'C',
    dateOfBirth: '1978-04-15',
    gender: 'Female',
    emailAddress: 'yara.olivia@example.com',
    phoneNumber: '+7739254857',
    addressLine1: '945 Pine St',
    addressLine2: 'Apt 1',
    city: 'Othertown',
    state: 'CA',
    postalCode: '56741',
    country: 'USA',
    jobTitle: 'Marketing Manager',
    department: 'Sales',
    position: 'Officer',
    role: 'Consultant',
    employmentType: 'Contract',
    dateOfHire: '2020-10-19',
    employeeStatus: 'Active',
    salary: 105899,
    payGrade: 'Level 1',
    bonus: 2454,
    commission: 872,
    benefits: ['Stock Options', 'Health Insurance'],
    workHours: '9 AM - 5 PM',
    workLocation: 'Office',
    shift: 'Day',
    annualLeaveEntitlement: 20,
    sickLeaveEntitlement: 19,
    leaveBalance: 10,
    leaveHistory: [
      { type: 'Annual', startDate: '2023-06-16', endDate: '2023-02-20' },
      { type: 'Sick', startDate: '2023-01-07', endDate: '2023-04-22' }
    ],
    performanceReviews: [
      { date: '2023-05-01', summary: 'Needs improvement' },
      { date: '2022-04-01', summary: 'Meets expectations' }
    ],
    trainingCertifications: ['Digital Marketing Expert', 'Leadership Training'],
    skills: ['Recruitment', 'Content Marketing', 'React'],
    goalsObjectives: [{ goal: 'Complete the ABC project', dueDate: '2024-06-25' }],
    emergencyContact: {
      name: 'Bob',
      relationship: 'Spouse',
      phoneNumber: '+7638421542',
      email: 'hannah.karen@example.com'
    },
    nationality: 'American',
    maritalStatus: 'Single',
    dependents: 3,
    employeePhoto: 'https://example.com/photos/oliviawendy.jpg',
    notes: 'Strong problem-solving skills',
    username: 'oliviaian',
    password: 'hashedpassword',
    accessLevel: 'User'
  },
  {
    employeeID: 'E65351',
    firstName: 'Ian',
    lastName: 'Tina',
    middleName: 'G',
    dateOfBirth: '2000-08-18',
    gender: 'Female',
    emailAddress: 'ian.liam@example.com',
    phoneNumber: '+5826519335',
    addressLine1: '7 Pine St',
    addressLine2: 'Suite 100',
    city: 'Othertown',
    state: 'CA',
    postalCode: '69032',
    country: 'USA',
    jobTitle: 'Software Engineer',
    department: 'IT',
    position: 'Lead',
    role: 'Developer',
    employmentType: 'Part-time',
    dateOfHire: '2016-11-18',
    employeeStatus: 'Terminated',
    salary: 98870,
    payGrade: 'Level 2',
    bonus: 3480,
    commission: 782,
    benefits: ['401k', 'Health Insurance'],
    workHours: '9 AM - 5 PM',
    workLocation: 'Remote',
    shift: 'Night',
    annualLeaveEntitlement: 21,
    sickLeaveEntitlement: 16,
    leaveBalance: 0,
    leaveHistory: [
      { type: 'Annual', startDate: '2023-06-25', endDate: '2023-02-21' },
      { type: 'Sick', startDate: '2023-06-23', endDate: '2023-07-07' }
    ],
    performanceReviews: [
      { date: '2023-07-01', summary: 'Exceeds expectations' },
      { date: '2022-08-01', summary: 'Meets expectations' }
    ],
    trainingCertifications: ['Certified Java Developer', 'Leadership Training'],
    skills: ['Employee Relations', 'React', 'HR Compliance'],
    goalsObjectives: [{ goal: 'Complete the XYZ project', dueDate: '2024-01-12' }],
    emergencyContact: {
      name: 'Bob',
      relationship: 'Spouse',
      phoneNumber: '+2030635933',
      email: 'tina.karen@example.com'
    },
    nationality: 'American',
    maritalStatus: 'Single',
    dependents: 0,
    employeePhoto: 'https://example.com/photos/iantina.jpg',
    notes: 'Strong problem-solving skills',
    username: 'ianemma',
    password: 'hashedpassword',
    accessLevel: 'Admin'
  },
  {
    employeeID: 'E38752',
    firstName: 'Zoe',
    lastName: 'Jack',
    middleName: 'A',
    dateOfBirth: '1993-11-13',
    gender: 'Female',
    emailAddress: 'zoe.jack@example.com',
    phoneNumber: '+7826521532',
    addressLine1: '45 Elm St',
    addressLine2: 'Apt 3',
    city: 'Anytown',
    state: 'NY',
    postalCode: '12345',
    country: 'USA',
    jobTitle: 'Marketing Manager',
    department: 'Marketing',
    position: 'Officer',
    role: 'Consultant',
    employmentType: 'Full-time',
    dateOfHire: '2015-05-14',
    employeeStatus: 'Active',
    salary: 85000,
    payGrade: 'Level 4',
    bonus: 3200,
    commission: 1000,
    benefits: ['Health Insurance', 'Stock Options'],
    workHours: '9 AM - 5 PM',
    workLocation: 'Office',
    shift: 'Day',
    annualLeaveEntitlement: 15,
    sickLeaveEntitlement: 12,
    leaveBalance: 8,
    leaveHistory: [
      { type: 'Annual', startDate: '2023-05-10', endDate: '2023-05-20' },
      { type: 'Sick', startDate: '2023-03-15', endDate: '2023-03-20' }
    ],
    performanceReviews: [
      { date: '2023-06-01', summary: 'Meets expectations' },
      { date: '2022-05-01', summary: 'Exceeds expectations' }
    ],
    trainingCertifications: ['Digital Marketing Expert', 'HR Management'],
    skills: ['Team Leadership', 'SEO', 'Content Marketing'],
    goalsObjectives: [{ goal: 'Complete the DEF project', dueDate: '2024-05-15' }],
    emergencyContact: {
      name: 'Mia',
      relationship: 'Friend',
      phoneNumber: '+9641235784',
      email: 'zoe.jack@example.com'
    },
    nationality: 'American',
    maritalStatus: 'Married',
    dependents: 2,
    employeePhoto: 'https://example.com/photos/zoejack.jpg',
    notes: 'Great team player',
    username: 'zoejack',
    password: 'hashedpassword',
    accessLevel: 'User'
  },
  {
    employeeID: 'E63594',
    firstName: 'Mia',
    lastName: 'Wendy',
    middleName: 'B',
    dateOfBirth: '1986-07-19',
    gender: 'Female',
    emailAddress: 'mia.wendy@example.com',
    phoneNumber: '+5123847691',
    addressLine1: '12 Main St',
    addressLine2: 'Suite 100',
    city: 'Othertown',
    state: 'TX',
    postalCode: '75401',
    country: 'USA',
    jobTitle: 'HR Specialist',
    department: 'HR',
    position: 'Manager',
    role: 'Analyst',
    employmentType: 'Full-time',
    dateOfHire: '2012-03-28',
    employeeStatus: 'Active',
    salary: 94000,
    payGrade: 'Level 4',
    bonus: 4500,
    commission: 1500,
    benefits: ['401k', 'Health Insurance'],
    workHours: '9 AM - 5 PM',
    workLocation: 'Office',
    shift: 'Day',
    annualLeaveEntitlement: 18,
    sickLeaveEntitlement: 14,
    leaveBalance: 7,
    leaveHistory: [
      { type: 'Annual', startDate: '2023-04-20', endDate: '2023-04-30' },
      { type: 'Sick', startDate: '2023-02-10', endDate: '2023-02-15' }
    ],
    performanceReviews: [
      { date: '2023-04-01', summary: 'Exceeds expectations' },
      { date: '2022-03-01', summary: 'Meets expectations' }
    ],
    trainingCertifications: ['Leadership Training', 'Conflict Resolution'],
    skills: ['HR Compliance', 'Team Leadership', 'Employee Relations'],
    goalsObjectives: [{ goal: 'Complete the XYZ project', dueDate: '2024-03-25' }],
    emergencyContact: {
      name: 'Olivia',
      relationship: 'Spouse',
      phoneNumber: '+5123798642',
      email: 'olivia.mia@example.com'
    },
    nationality: 'American',
    maritalStatus: 'Married',
    dependents: 3,
    employeePhoto: 'https://example.com/photos/miawendy.jpg',
    notes: 'Excellent at team building',
    username: 'miawendy',
    password: 'hashedpassword',
    accessLevel: 'Admin'
  }
];
