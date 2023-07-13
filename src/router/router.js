import { createRouter, createWebHistory } from "vue-router"

import Register from '@/views/Register'
import Login from '@/views/Login'
import Main from '@/views/Main'

import authMixin from '@/mixins/authMixin';

const routes = [
  {
    path: '/',
    component: Main,
    beforeEnter: authMixin.beforeRouteEnter

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