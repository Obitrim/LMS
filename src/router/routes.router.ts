import HomeView from '@/static_pages/home/pages/HomeView.vue';
import type { RouteRecordRaw } from 'vue-router';

// Dashboard
import DashboardHome from '@/dashboard/pages/DashboardHome.vue';
import BaseDashboardLayout from '@/dashboard/components/layout/BaseDashboardLayout.vue';

// Employee
import EmployeeList from '@/employees/pages/EmployeeList.vue';

// Leave
import LeaveList from '@/leaves/pages/LeaveList.vue';
import LeavesHome from '@/leaves/pages/LeavesHome.vue';

// Authentication
import AuthView from '@/authentication/components/layout/AuthLayout.vue';
import SignupForm from '@/authentication/forms/SignupForm.vue';
import LoginForm from '@/authentication/forms/LoginForm.vue';

// Contract
import ContractsHome from '@/contracts/pages/ContractsHome.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      requiresAuth: false
    },
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    meta: { requiresAuth: false },
    component: AuthView,
    children: [
      {
        path: 'register',
        name: 'signup',
        component: SignupForm
      },
      {
        path: 'login',
        name: 'login',
        component: LoginForm
      }
    ]
  },
  {
    path: '/app',
    name: 'app',
    meta: { requiresAuth: false },
    component: BaseDashboardLayout,
    children: [
      {
        path: '',
        name: 'dashboard-home',
        component: DashboardHome
      },
      {
        path: 'employees',
        name: 'employee-list',
        component: EmployeeList
      },
      {
        path: '/leaves',
        name: 'leaves',
        // component: LeaveViewsLayout,
        redirect: { name: 'leave-home' },
        children: [
          {
            path: '',
            name: 'leave-home',
            component: LeavesHome
          },
          {
            path: 'requests',
            name: 'leave-requests',
            component: LeaveList
          }
        ]
      },
      {
        path: '/contracts',
        name: 'contracts',
        // component: LeaveViewsLayout,
        redirect: { name: 'contract-home' },
        children: [
          {
            path: '',
            name: 'contract-home',
            component: ContractsHome
          }
        ]
      }
    ]
  }
];

export default routes;
