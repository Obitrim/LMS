import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import AuthRegistration from '@/components/auth/AuthRegistration.vue'
import DashboardHome from '@/views/app/DashboardHome.vue'
import AuthView from '@/views/AuthView.vue'
import HomeView from '@/views/HomeView.vue'
import type { RouteRecordRaw } from 'vue-router'
import AuthLogin from '@/components/auth/AuthLogin.vue'

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
      }
    ]
  }
]

export default routes
