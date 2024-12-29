import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue'; // Ensure this path is correct
import SecretView from '@/views/SecretView.vue'; // Create this component for the secret page

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/secret',
    component: SecretView,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem('authenticated');
      if (isAuthenticated) {
        next();
      } else {
        alert('Access Denied! Please enter the correct secret key.');
        next('/');
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
