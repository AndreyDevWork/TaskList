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
      axios.post('/api/controllers/login.php', formData)
      .then(response => {
        if(response.data == 'Ok') {
          commit('setIsAuth', true); 
          return true
        }
      })
      .catch(error => {
        console.error(error);
        return false
      })
    },
    
    logout({ commit }) {
      axios.delete('/api/controllers/logout.php')
      .then(response => {
        if(response.data == 'Ok') {
          commit('setIsAuth', false); 
        }
      })
    }
  }
}