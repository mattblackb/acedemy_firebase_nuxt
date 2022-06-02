export const state = () => ({
    stories: [],
    alPeople: []
  })
  
  const actions = {
    async setStories(state) {
        var returnedDocs = [];
       await  this.$fire.firestore.collection('Stories').get()
        .then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                var includeID = doc.data();
                includeID.id = doc.id;
                returnedDocs.push(includeID);
            });

        state.commit("SET_STORIES", returnedDocs);  
          });
        //  
      },
      async setAllPeople(state) {
        var returnedDocs = [];
       await  this.$fire.firestore.collection('People').get()
        .then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                var includeID = doc.data();
                includeID.id = doc.id;
                returnedDocs.push(includeID);
            });

        state.commit("SET_ALLPEOPLE", returnedDocs);  
          });
        //  
      }
  }
  const mutations = {
    SET_STORIES(state, stories) {
      state.stories = stories
    },
    SET_ALLPEOPLE(state, alPeople ) {
      console.log('alPeople', alPeople)
      state.alPeople = alPeople
    }
  }


  const getters = {
    getStories(state) {
      return state.stories
    }
    
  }

  export default {
    state,
    actions,
    mutations,
    getters,
  }
  

