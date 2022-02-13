const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
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
  async fetchPeople(state,uid) {
    console.log(uid);
    var returnedDocs = [];
    
    await this.$fire.firestore.collection('People').where("email", "==", uid).get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        returnedDocs.push(doc.data());
    });
  });
    
   console.log('Return:', returnedDocs[0])
   state.commit("SET_PEOPLE", returnedDocs[0]);  

  

 
   }
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_PEOPLE: (state, person) => {
    state.person = person;
  },
  CLEAR_USER(state, user) {
    state.user = user
  },
}

const state = () => ({
  user: null,
  person: null
})

const getters = {
  getUser(state) {
    return state.user
  },
  getPeople(state) {
    return state.person
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
