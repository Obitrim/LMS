import DashboardLayout from '@/components/layout/DashboardLayout.vue';
import AuthRegistration from '@/components/auth/AuthRegistration.vue';
import AuthView from '@/views/AuthView.vue';
import HomeView from '@/views/HomeView.vue';
import type { RouteRecordRaw } from 'vue-router';
import AuthLogin from '@/components/auth/AuthLogin.vue';

import DashboardHome from '@/views/app/DashboardHome.vue';
import EmployeeList from '@/views/app/EmployeeList.vue';
import LeaveList from '@/views/app/LeaveList.vue';
import LeavesHome from '@/views/app/leaves/LeavesHome.vue';

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
        component: AuthRegistration
      },
      {
        path: 'login',
        name: 'login',
        component: AuthLogin
      }
    ]
  },
  {
    path: '/app',
    name: 'app',
    meta: { requiresAuth: false },
    component: DashboardLayout,
    children: [
      {
        path: '',
        name: 'dashboard-home',
        component: DashboardHome
      },
      {
        path: '/employees',
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
      }
    ]
  }
];

export default routes;
