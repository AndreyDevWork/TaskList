import axios from "axios";

export const formLoginModule = {
  state: () => ({
    isAuth: false
  }),
  mutations: {
    setIsAuth(state, value) {
      state.isAuth = value
    }
  },
  getters: {
    isAuth(state) {
      return state.isAuth
    }
  },
  actions: {
    sendLoginData({ commit }, formData) {
      return axios.post('/api/controllers/login.php', formData)
      .then(response => {
        if (response.data === 'Ok') {
          commit('setIsAuth', true)
          const currentDate = new Date();
          const expirationDate = new Date(currentDate.getTime() + 100 * 60 * 60 * 1000);
          const expirationDateString = expirationDate.toUTCString();
          document.cookie = "auth=true; expires=" + expirationDateString + "; path=/";
          return true
        } else {
          return false
        }
      })
    },
    
    logout({ commit }) {
      return axios.delete('/api/controllers/logout.php')
      .then(response => {
        if(response.data == 'Ok') {
          commit('setIsAuth', false); 
          document.cookie = "auth=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          return true
        } else {
          return false
        }
      })
      .catch(error => {
        console.error(error);
        return false
      })
    }
  }
}