import axios from "axios";

export const formLoginModule = {
  state: () => {
    isAuth: false
  },
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

  }
}