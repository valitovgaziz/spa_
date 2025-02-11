import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../auth/stores/auth.store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('../views/SupportView.vue'),
  },
  {
    path: '/feetback',
    name: 'feetback',
    component: () => import('../views/FeetbackView.vue'),
  },
  {
    path: '/results',
    name: 'results',
    component: () => import('../views/ResultsView.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/SettingsView.vue'),
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/RegistrationView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogInView.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LogOutView.vue')
  },
  {
    path: '/restObject',
    name: 'restObject',
    component: () => import('../views/RestObjectView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  await authStore.checkAuth();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login');
  } else if (to.path === '/login' && authStore.isAuthenticated) {
    next('/profile');
  } else {
    next();
  }
});

export default router
