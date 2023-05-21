import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import EventsView from '../views/EventsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        transition: 'up',
      },
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView,
      meta: {
        transition: 'down',
      },
    },
  ]
})

export default router
