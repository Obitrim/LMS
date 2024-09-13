import type { IEmployee } from '@/employees/types/employee.type';

interface ILeave {
  id: string;
  employee: Partial<IEmployee>;
  leaveType: string;
  startDate: string;

  endDate?: string; // Optional for partial leaves within a single day
  exceptions: { date: string; periods: ('morning' | 'afternoon' | 'evening')[] }[];
}

export const leaveList: ILeave[] = [
  {
    id: 'L001',
    employee: {
      employeeID: 'E12345',
      firstName: 'John',
      lastName: 'Doe'
    },
    leaveType: 'Annual',
    startDate: '2024-02-01',
    endDate: '2024-02-10',
    exceptions: [
      {
        date: '2024-02-03',
        periods: ['morning']
      },
      {
        date: '2024-02-07',
        periods: ['afternoon']
      }
    ]
  },
  {
    id: 'L002',
    employee: {
      employeeID: 'E12346',
      firstName: 'Alice',
      lastName: 'Smith'
    },
    leaveType: 'Sick',
    startDate: '2024-03-05',
    endDate: '2024-03-07',
    exceptions: [
      {
        date: '2024-03-06',
        periods: ['morning', 'afternoon']
      }
    ]
  },
  {
    id: 'L003',
    employee: {
      employeeID: 'E12347',
      firstName: 'Michael',
      lastName: 'Johnson'
    },
    leaveType: 'Annual',
    startDate: '2024-04-01',
    endDate: '2024-04-10',
    exceptions: []
  },
  {
    id: 'L004',
    employee: {
      employeeID: 'E97776',
      firstName: 'Noah',
      lastName: 'Hannah'
    },
    leaveType: 'Annual',
    startDate: '2024-05-15',
    endDate: '2024-05-25',
    exceptions: [
      {
        date: '2024-05-20',
        periods: ['morning', 'afternoon']
      }
    ]
  },
  {
    id: 'L005',
    employee: {
      employeeID: 'E81499',
      firstName: 'Yara',
      lastName: 'Liam'
    },
    leaveType: 'Sick',
    startDate: '2024-06-01',
    endDate: '2024-06-05',
    exceptions: [
      {
        date: '2024-06-04',
        periods: ['afternoon']
      }
    ]
  },
  {
    id: 'L006',
    employee: {
      employeeID: 'E65351',
      firstName: 'Ian',
      lastName: 'Tina'
    },
    leaveType: 'Annual',
    startDate: '2024-07-10',
    endDate: '2024-07-20',
    exceptions: []
  },
  {
    id: 'L007',
    employee: {
      employeeID: 'E38752',
      firstName: 'Zoe',
      lastName: 'Jack'
    },
    leaveType: 'Annual',
    startDate: '2024-08-01',
    endDate: '2024-08-10',
    exceptions: []
  },
  {
    id: 'L008',
    employee: {
      employeeID: 'E63594',
      firstName: 'Mia',
      lastName: 'Wendy'
    },
    leaveType: 'Sick',
    startDate: '2024-09-05',
    endDate: '2024-09-10',
    exceptions: []
  },
  {
    id: 'L009',
    employee: {
      employeeID: 'E12345',
      firstName: 'John',
      lastName: 'Doe'
    },
    leaveType: 'Sick',
    startDate: '2024-10-01',
    endDate: '2024-10-03',
    exceptions: []
  },
  {
    id: 'L010',
    employee: {
      employeeID: 'E12346',
      firstName: 'Alice',
      lastName: 'Smith'
    },
    leaveType: 'Annual',
    startDate: '2024-11-01',
    endDate: '2024-11-10',
    exceptions: []
  },
  {
    id: 'L011',
    employee: {
      employeeID: 'E12347',
      firstName: 'Michael',
      lastName: 'Johnson'
    },
    leaveType: 'Sick',
    startDate: '2024-12-01',
    endDate: '2024-12-05',
    exceptions: []
  },
  {
    id: 'L012',
    employee: {
      employeeID: 'E97776',
      firstName: 'Noah',
      lastName: 'Hannah'
    },
    leaveType: 'Annual',
    startDate: '2024-01-15',
    endDate: '2024-01-25',
    exceptions: []
  },
  {
    id: 'L013',
    employee: {
      employeeID: 'E81499',
      firstName: 'Yara',
      lastName: 'Liam'
    },
    leaveType: 'Sick',
    startDate: '2024-02-15',
    endDate: '2024-02-17',
    exceptions: [
      {
        date: '2024-02-16',
        periods: ['morning', 'evening']
      }
    ]
  },
  {
    id: 'L014',
    employee: {
      employeeID: 'E65351',
      firstName: 'Ian',
      lastName: 'Tina'
    },
    leaveType: 'Annual',
    startDate: '2024-03-20',
    endDate: '2024-03-30',
    exceptions: []
  },
  {
    id: 'L015',
    employee: {
      employeeID: 'E38752',
      firstName: 'Zoe',
      lastName: 'Jack'
    },
    leaveType: 'Sick',
    startDate: '2024-04-15',
    endDate: '2024-04-18',
    exceptions: []
  },
  {
    id: 'L016',
    employee: {
      employeeID: 'E63594',
      firstName: 'Mia',
      lastName: 'Wendy'
    },
    leaveType: 'Annual',
    startDate: '2024-05-01',
    endDate: '2024-05-10',
    exceptions: []
  },
  {
    id: 'L017',
    employee: {
      employeeID: 'E12345',
      firstName: 'John',
      lastName: 'Doe'
    },
    leaveType: 'Annual',
    startDate: '2024-06-01',
    endDate: '2024-06-10',
    exceptions: []
  },
  {
    id: 'L018',
    employee: {
      employeeID: 'E12346',
      firstName: 'Alice',
      lastName: 'Smith'
    },
    leaveType: 'Sick',
    startDate: '2024-07-05',
    endDate: '2024-07-08',
    exceptions: [
      {
        date: '2024-07-07',
        periods: ['morning']
      }
    ]
  },
  {
    id: 'L019',
    employee: {
      employeeID: 'E12347',
      firstName: 'Michael',
      lastName: 'Johnson'
    },
    leaveType: 'Annual',
    startDate: '2024-08-15',
    endDate: '2024-08-25',
    exceptions: [
      {
        date: '2024-08-20',
        periods: ['afternoon']
      }
    ]
  },
  {
    id: 'L020',
    employee: {
      employeeID: 'E97776',
      firstName: 'Noah',
      lastName: 'Hannah'
    },
    leaveType: 'Sick',
    startDate: '2024-09-10',
    endDate: '2024-09-12',
    exceptions: []
  }
];
