import axios from 'axios';
import store from '@/store/';

async function checkAuthentication() {
  try {
    const response = await axios.get('/api/controllers/auth.php');
    return response.data;
  } catch (error) {
    console.error('Пользователь не авторизован', error);
    return false;
  }
}

export default {
  beforeRouteEnter: async (to, from, next) => {
    const isAuthenticated = await checkAuthentication();

    if (isAuthenticated) {
      store.commit('setIsAuth', true);
      next();
    } else {
      next('/login');
    }
  },
};
