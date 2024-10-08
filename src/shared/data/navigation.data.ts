import type { TNavigationList } from '../types/navigation.type';

export const DASHBOARD_SIDEBAR_ITEMS: TNavigationList = [
  {
    icon: {
      active: 'ic:baseline-dashboard',
      inactive: 'material-symbols-light:dashboard-outline'
    },
    routeName: 'dashboard-home',
    text: 'Dashboard'
  },

  {
    icon: {
      active: 'mdi:users',
      inactive: 'ph:users-light'
    },
    routeName: 'employee-list',
    text: 'Employees'
  },
  {
    icon: {
      active: 'bitcoin-icons:calendar-filled',
      inactive: 'bitcoin-icons:calendar-outline'
    },
    routeName: 'leave-requests',
    text: 'Leaves',
    children: [
      {
        routeName: 'leave-requests',
        text: 'Requests'
      }
    ]
  },
  {
    icon: {
      active: 'mdi:contract',
      inactive: 'mdi:contract-outline'
    },
    routeName: 'contract-home',
    text: 'Contracts'
    // children: [
    //   {
    //     routeName: 'contract-home',
    //     text: 'Requests'
    //   }
    // ]
  }
];
