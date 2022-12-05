<template>
  <div id="app">
    <div class="search-wrapper">
      <label>Search email:</label>
      <input type="text" v-model="search" placeholder="Search email.." />
      <button @click="returnCurrent">Search</button>
    </div>
    <div class="wrapper" v-if="this.chosenUser.length != 0">
      {{ this.chosenUser.id }} || {{ this.chosenUser.data.email }} ||
      {{ this.chosenUser.data.credits }}
    </div>
    <div>
      <input
        type="text"
        v-model="creditsvalue"
        placeholder="Add credit value..."
      />
      <v-btn color="success" class="mr-4" @click="addCredits">
        Add Credits
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import _ from 'lodash'
export default {
  ...mapGetters('setuser', ['getchosenPerson']),
  data() {
    return {
      dialog: false,
      dialogSave: false,
      cookieJson: '',
      currentCreditsneeded: [],
      currentmodule: '',
      search: '',
      currentUser: {},
      creditsvalue: 0,
    }
  },
  methods: {
    ...mapActions(['setuser/setPerson']),

    returnCurrent() {
      const that = this
      var returnedArray = []
      this.$store.dispatch('setuser/setPerson', this.search)

      return returnedArray
    },
    addCredits() {
      let personData = { ...this.$store.state.setuser.chosenPerson }
      let clonededPerson = _.cloneDeep(personData)
      clonededPerson.data.credits =
        parseInt(clonededPerson.data.credits) + parseInt(this.creditsvalue)
      console.log(clonededPerson.data)
      this.$store.commit('setuser/updatePerson', clonededPerson.data)
      this.$store.commit('SET_PEOPLE', personData)
    },
  },
  mounted() {},
  computed: {
    chosenUser() {
      console.log(this.$store.state.setuser.chosenPerson)
      return this.$store.state.setuser.chosenPerson
    },
  },
}
</script>
