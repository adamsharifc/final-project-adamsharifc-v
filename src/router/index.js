import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/AddBug',
      name: 'AddBug',
      component: () => import('../views/AddBug.vue')

    },
    {
      path: '/BugList',
      name: 'BugList',
      component: () => import('../views/BugList.vue')
    }
  ]
})

export default router
