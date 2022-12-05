export const state = () => ({
  person: [],
  chosenPerson: [],
})

export const actions = {
  async setPerson(state, email) {
    await this.$fire.firestore
      .collection('People')
      .where('email', '==', email)
      .get()
      .then((querySnapshot) => {
        // console.log('userProfile', querySnapshot.docs[0]);
        // console.log('ID', querySnapshot.docs[0].id);
        if (querySnapshot.docs[0]) {
          var returnUser = {}
          returnUser.id = querySnapshot.docs[0].id
          returnUser.data = querySnapshot.docs[0].data()
          state.commit('SET_CHOSENPERSON', returnUser)
        } else {
          console.log('no user')
          state.commit('SET_CHOSENPERSON', [])
        }
      })
  },
}
export const mutations = {
  async updatePerson(state, docData) {
    console.log('UpdatePerson', docData)
    var userProfile = await this.$fire.firestore
      .collection('People')
      .where('email', '==', docData.email)
      .get()
      .then((querySnapshot) => {
        // console.log('userProfile', querySnapshot.docs[0]);
        // console.log('ID', querySnapshot.docs[0].id);
        this.$fire.firestore
          .collection('People')
          .doc(querySnapshot.docs[0].id)
          .set(docData)
      })
    //set person data state

    //state.commit("SET_USER", userProfile);

    // if(userProfile.docs[0].id){
    //   console.log('ID', docs[0].id);
    // this.$fire.firestore.collection('People').doc(userProfile.docs[0].id).set(docData);
    // }
  },

  SET_CHOSENPERSON(state, chosenPerson) {
    state.chosenPerson = chosenPerson
  },

  clearPeople({ commit }) {
    commit('SET_PEOPLE', [])
  },
}

export const getters = {
  getchosenPerson(state) {
    return state.chosenPerson
  },
}
