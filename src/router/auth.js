import axios from 'axios';
import store from '@/store/';

async function checkAuthentication() {
  try {
    const response = await axios.get('/api/controllers/auth.php');
    if(response.data == 'Ok') {
      return true
    }
  } catch (error) {
    console.error('User not authorized', error);
    return false
  }
}

export default {
  getCookie(name) {
    const cookies = document.cookie.split(';'); 
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const [cookieName, cookieValue] = cookie.split('=');
      if (name === cookieName) {
        return cookieValue;
      }
    }
  },
  async auth() {
    try {
      const response = await axios.get('/api/controllers/auth.php');
      if(response.data == 'Ok') {
        return true
      }
    } catch (error) {
      console.error('User not authorized', error);
      return false
    }
  },
  beforeRouteEnterToMain: async (to, from, next) => {
    const isAuthenticated = await checkAuthentication();
    if (isAuthenticated) {
      store.commit('setIsAuth', true)
      next()
    } else {
      next('/login')
    }
  },
  beforeRouteEnterToLogin: async (to, from, next) => {
    const isAuthenticated = await checkAuthentication();

    if (isAuthenticated) {
      store.commit('setIsAuth', true)
      next('/')
    } else {
      next()
    }
  }
};
