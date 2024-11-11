import ApplicationForm from '@/views/ApplicationForm.vue'
import ContactusView from '@/views/ContactusView.vue'
import JobDetail from '@/views/JobDetail.vue'
import JobsView from '@/views/JobsView.vue'
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
      component: JobsView,
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobDetail,
      props: true,
    },
    {
      path: '/job-application/:id',
      name: 'job-application',
      component: ApplicationForm,
      props: true,
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
      component: ContactusView,
    },
  ],
})

export default router
