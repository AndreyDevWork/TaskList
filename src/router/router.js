import { createRouter, createWebHistory } from "vue-router"

import Register from '@/views/Register'

const routes = [
  {
    path: '/register',
    component: Register
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router