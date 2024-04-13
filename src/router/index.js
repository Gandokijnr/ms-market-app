import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/Mslogin.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Mssignup.vue')
    },
    {
      path: '/iphoneChecklist',
      name: 'iphonechecklist',
      component: () => import('../views/iphoneChecklistview.vue')
    },
    {
      path: '/samsungChecklist',
      name: 'samsungchecklist',
      component: () => import('../views/samsungChecklistview.vue')
    },
    {
      path: '/infinixChecklist',
      name: 'infinixchecklist',
      component: () => import('../views/infinixChecklistview.vue')
    },
    {
      path: '/teknoChecklist',
      name: 'teknochecklist',
      component: () => import('../views/TeknoChecklistview.vue')
    },
    {
      path: '/itelChecklist',
      name: 'itelchecklist',
      component: () => import('../views/ItelChecklistview.vue')
    },
    {
      path: '/othersChecklist',
      name: 'otherschecklist',
      component: () => import('../views/OthersChecklistview.vue')
    },
    {
      path: '/defaultview',
      name: 'defaultview',
      component: () => import('../views/defaultView.vue')
    },
  ]
})

export default router
