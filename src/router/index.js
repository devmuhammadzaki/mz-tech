import ServicesView from '@/views/ServicesView.vue'
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
      component: ServicesView,
    },
    {
      path: '/services/:id',
      name: 'service',
      component: ServiceView,
      props: true,
    },
    {
      path: '/jobs',
      name: 'jobs',
    },
    {
      path: '/customers',
      name: 'customers',
    },
    {
      path: '/blogs',
      name: 'blogs',
    },
    {
      path: '/support',
      name: 'support',
    },
    {
      path: '/quote-request',
      name: 'quote-request',
    },
    {
      path: '/service-request',
      name: 'service-request',
    },
    {
      path: '/contactus',
      name: 'contactus',
    },
  ],
})

export default router
