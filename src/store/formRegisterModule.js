import axios from "axios";

export const formRegisterModule = {
  
  state: () => ({
    isRegister: false
  }),
  mutations: {
    setIsRegister(state, value) {
      state.isRegister = value;
    }
  },
  getters: {
    isRegister(state) {
      return state.isRegister;
    }
  },
  actions: {
    sendData({ commit }, formData) {
      axios.post('/api/controllers/register.php', formData)
      .then(response => {
        console.log(response);
        commit('setIsRegister', true); 
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
}

