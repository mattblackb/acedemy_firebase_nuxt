export const state = () => ({
    stories: []
  })
  
  const actions = {
    async setStories(state) {
      console.log('State...')
        var returnedDocs = [];
       await  this.$fire.firestore.collection('Stories').get()
        .then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                returnedDocs.push(doc.data());
            });
        state.commit("SET_STORIES", returnedDocs);  
          });
        //  
      }
  }
  const mutations = {
    SET_STORIES(state, stories) {
      state.stories = stories
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
  

