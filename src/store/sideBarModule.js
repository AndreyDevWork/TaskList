export const sideBarModule = {
  namespaced: true,
  state: () => ({
    current: 'main',
    profile: false,
  }),
  mutations: {
    setProfile(state, value) {
      state.profile = value
      console.log(state.profile)
    }
  },
  getters: {
    current(state) {
      return state.current
    },
    profile(state) {
      return state.profile
    }
  },
  actions: {

  }
}