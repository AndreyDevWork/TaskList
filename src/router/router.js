import { createRouter, createWebHistory } from "vue-router"

import Register from '@/views/Register'
import Login from '@/views/Login'

const routes = [
  {
    path: '/',
    redirect: '/register'
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },

]

const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router