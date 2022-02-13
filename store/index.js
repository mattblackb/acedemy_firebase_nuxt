const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // remove state
      state.commit('CLEAR_USER', null)
      state.commit('CLEAR_PERSON', null)
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
      var returnedDocs = [];
    
      await this.$fire.firestore.collection('People').where("email", "==", email).get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          returnedDocs.push(doc.data());
      });
    });
      
     console.log('Return:', returnedDocs[0])
     state.commit("SET_PEOPLE", returnedDocs[0]);  
    }
  },
  // async fetchPeople(state,uid) {
   

  

 
  //  }
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
  CLEAR_PERSON(state, person) {
    state.person = person
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
