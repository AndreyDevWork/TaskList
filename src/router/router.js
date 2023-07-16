import { createRouter, createWebHistory } from "vue-router"

import Register from '@/views/Register'
import Login from '@/views/Login'
import Main from '@/views/Main'

import auth from "@/router/auth"




const routes = [
  {
    path: '/',
    component: Main,

  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/login',
    component: Login,
  },

]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  const authCheck = auth.getCookie('auth');
  if ((to.path !== '/register' && to.path !== '/login') && Boolean(authCheck) === false) {
    next('/login');
  } else if((to.path === '/register' || to.path === '/login') && Boolean(authCheck) === true) {
    next('/');
  } else {
    next()
  }

});

export default router