import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  // if (to.requiresAuth)
});

export default router
