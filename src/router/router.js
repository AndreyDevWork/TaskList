import { createRouter, createWebHistory } from "vue-router"

import Register from '@/views/Register'
import Login from '@/views/Login'
import Main from '@/views/Main'

import auth from '@/router/auth';

const routes = [
  {
    path: '/',
    component: Main,
    beforeEnter: auth.beforeRouteEnterToMain

  },
  {
    path: '/register',
    component: Register,
    beforeEnter: auth.beforeRouteEnterToLogin
  },
  {
    path: '/login',
    component: Login,
    beforeEnter: auth.beforeRouteEnterToLogin
  },

]

const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router