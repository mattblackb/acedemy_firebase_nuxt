const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    console.log('State Changed', authUser)
    if (!authUser) {
      // remove state
      state.commit('CLEAR_USER', null)

      //redirect from here
      this.$router.push({
        path: '/auth/signin',
      })
    } else {
      const { uid, email } = authUser
      state.commit('SET_USER', {
        uid,
        email,
      })
    }
  },
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  CLEAR_USER(state, user) {
    state.user = user
  },
}

const state = () => ({
  user: null,
})

const getters = {
  getUser(state) {
    return state.user
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
