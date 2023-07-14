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
