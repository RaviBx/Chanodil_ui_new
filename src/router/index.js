import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/makeinq',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/myinq',
    name: 'Myinquiry',
    component: () => import('../views/Myinquiry.vue')
  },
  {
    path: '/messagechanodil',
    name: 'MessageChanodil',
    component: () => import('../views/MessageChanodil.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
