import { commit } from 'vuex'

export const dialogCreateCollectionModule = {
  namespaced: true,
  state: () => ({
    isOpened: false
  }),
  mutations: {
    setIsOpened(state, value) {
      state.isOpened = value
    }
  },
  getters: {
    isOpened(state) {
      return state.isOpened
    }
  },
  actions: {
    changeIsOpened({ commit, state }) {
      commit('setIsOpened', !state.isOpened);
    }
  }
}