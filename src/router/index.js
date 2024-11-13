import ApplicationForm from '@/views/ApplicationForm.vue'
import BlogsView from '@/views/BlogsView.vue'
import ContactusView from '@/views/ContactusView.vue'
import CustomersView from '@/views/CustomersView.vue'
import JobDetail from '@/views/JobDetail.vue'
import JobsView from '@/views/JobsView.vue'
import PlansView from '@/views/PlansView.vue'
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
      component: CustomersView,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsView
    },
    {
      path: '/plans',
      name: 'plans',
      component: PlansView
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

let hasReloaded = false

router.beforeEach((to, from, next) => {
  if (from.name !== to.name) {
    hasReloaded = false
  }

  if (
    (to.name === 'home' || to.name === 'services') &&
    from.name !== to.name &&
    window.location.pathname !== to.path &&
    !hasReloaded
  ) {
    hasReloaded = true
    window.location.replace(to.fullPath)
  } else {
    next()
  }
})

window.addEventListener('popstate', () => {
  const path = window.location.pathname

  if ((path === '/' || path === '/services') && !hasReloaded) {
    hasReloaded = true
    window.location.replace(path)
  }
})

export default router
