export const state = () => ({
    chosenAcheivements: {}
  })
  
  export const mutations = {
    addAchievements(state, text ) {
      console.log('Text', text);
      state.chosenAcheivements = text
    },
    resetAchievements(state) {
      state.chosenAcheivements = {}
    }

  }

  export const getters = {
    getAchievements(state) {
      console.log('state', state.chosenAcheivements);
      return state.chosenAcheivements
    }
    
  }