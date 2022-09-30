export const state = () => ({
    person: []
  })
  
  export const mutations = {
    async updatePerson(context, docData) {
        console.log('UpdatePerson', docData);
        var userProfile = await  this.$fire.firestore.collection('People').where("email", "==", docData.email).get().then(querySnapshot => {
          // console.log('userProfile', querySnapshot.docs[0]);
          // console.log('ID', querySnapshot.docs[0].id);
          this.$fire.firestore.collection('People').doc(querySnapshot.docs[0].id).set(docData);
        })
        //set person data state
        state.commit("SET_USER", userProfile);
       
        // if(userProfile.docs[0].id){
        //   console.log('ID', docs[0].id);
        // this.$fire.firestore.collection('People').doc(userProfile.docs[0].id).set(docData);
        // }
      },
    clearPeople({ commit }) {
        commit("SET_PEOPLE", []);
      }
  }