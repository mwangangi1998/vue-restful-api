import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'skillIndex',
      component: () => import('../views/skills/skillIndex.vue')
    },
    {
      path: '/skills/Create',
      name: 'skillCreate',
      component: () => import('../views/skills/skillCreate.vue')
    },
    {
      path: '/skills/:id/edit',
      name: 'skillEdit',
      component: () => import('../views/skills/skillEdit.vue')
    },
  ],
});

export default router;
