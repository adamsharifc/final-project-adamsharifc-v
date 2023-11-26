import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue'),
      // meta: {requiresAuth: true}
    },
    {
      path: '/BugFeed',
      name: 'BugFeed',
      component: () => import('../views/BugFeed.vue'),
      // meta: {requiresAuth: true}
    },
    {
      path: '/MyReports',
      name: 'MyReports',
      component: () => import('../views/MyReports.vue'),
      // meta: {requiresAuth: true}
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue'),
      // meta: {requiresAuth: true}
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/Bug/:id',
      name: 'Bug',
      component: () => import('../views/Bug.vue'),
      // meta: {requiresAuth: true} //commented out for testing
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.isLoggedIn) {
      next({
        path: '/Login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // Make sure to always call next()!
  }
});

export default router
