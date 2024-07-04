import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('@/views/ErrorPage/ErrorPage.vue'),
    meta: {
      layout: 'Simple',
      tKey: 'error.notFound',
    },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage/HomePage.vue'),
    meta: {
      layout: 'Main',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutPage/AboutPage.vue'),
    meta: {
      layout: 'Main',
    },
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/ServicesPage/ServicesPage.vue'),
    meta: {
      layout: 'Main',
    },
  },
  {
    path: '/services/:id',
    name: 'mobileServices',
    component: () => import('@/views/ServiceViewPage/ServiceViewPage.vue'),
    meta: {
      layout: 'Main',
    },
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/views/PortfolioPage/PortfolioPage.vue'),
    meta: {
      layout: 'Main',
    },
  },
  {
    path: '/portfolio/smart-house',
    name: 'PortfolioHouse',
    component: () => import('@/views/PortfolioViewPage/PortfolioViewPage.vue'),
    meta: {
      layout: 'Main',
    },
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: () => import('@/views/SolutionsPage/SolutionsPage.vue'),
    meta: {
      layout: 'Main',
    },
  },
  {
    path: '/solutions/:id',
    name: 'solutionsView',
    component: () => import('@/views/SolutionsViewPage/SolutionsViewPage.vue'),
    meta: {
      layout: 'Main',
    },
  },

  {
    path: '/vacancies',
    name: 'vacancies',
    component: () => import('@/views/VacanciesPage/VacanciesPage.vue'),
    meta: {
      layout: 'Main',
    },
  },
  {
    path: '/vacancies/:id',
    name: 'vacanciesView',
    component: () => import('@/views/VacanciesViewPage/VacanciesViewPage.vue'),
    meta: {
      layout: 'Main',
    },
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/ContactsPage/ContactsPage.vue'),
    meta: {
      layout: 'Main',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/AuthPage/AuthPage.vue'),
    meta: {
      layout: 'Auth',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition
    return { x: 0, top: 0 }
  },
  routes,
})

export { router, routes }
