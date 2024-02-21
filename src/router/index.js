import { createRouter, createWebHistory } from 'vue-router'
import loginRoutes from './modules/login';
import signupRoutes from './modules/signup';
import searchRoutes from './modules/search';

const routes = [
  {
    path: '/',
    component: () => import('@/views/MainPage.vue'),
  },
  ...loginRoutes,
  ...signupRoutes,
  ...searchRoutes,
  {
    path: "/:pathMatch(.*)*",
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
