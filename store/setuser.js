export const state = () => ({
    person: []
  })
  
  export const mutations = {
    async updatePerson(context, docData) {
        var userProfile = await  this.$fire.firestore.collection('People').where("email", "==", docData.email).get();
        this.$fire.firestore.collection('People').doc(userProfile.docs[0].id).set(docData);
    
      },
    clearPeople({ commit }) {
        commit("SET_PEOPLE", []);
      }
  }