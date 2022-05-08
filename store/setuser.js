export const state = () => ({
    person: []
  })
  
  export const mutations = {
    async updatePerson(context, docData) {
        console.log('DocData',docData);
        var userProfile = await  this.$fire.firestore.collection('People').where("email", "==", docData.email).get();
        console.log('DocData',docData, userProfile.docs[0].id);
        if(userProfile.docs[0].id){
        this.$fire.firestore.collection('People').doc(userProfile.docs[0].id).set(docData);
        console.log('Saved');
        }
      },
    clearPeople({ commit }) {
        commit("SET_PEOPLE", []);
      }
  }