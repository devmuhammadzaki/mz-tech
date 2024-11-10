import ServiceView from '@/views/ServiceView.vue'
import WorksView from '@/views/WorksView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView,
    },
    {
      path: '/services',
      name: 'services',
    },
    {
      path: '/services/:id',
      name: 'service',
      component: ServiceView,
      props: true,
    },
    {
      path: '/quote-request',
      name: 'quote-request',
    },
    {
      path: '/contactus',
      name: 'contactus',
    },
    {
      path: '/jobs',
      name: 'jobs',
    },
    {
      path: '/support',
      name: 'support',
    },
    {
      path: '/blogs',
      name: 'blogs',
    },
    {
      path: '/customers',
      name: 'customers',
    },
    {
      path: '/service-request',
      name: 'service-request',
    },
  ],
})

export default router
