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
      <div class="" v-if="this.chosenUser.length != 0">
        <div
          v-for="(item, index) in this.chosenUser.data.saved_games"
          :key="index"
        >
          {{ item[0] }}
          <div v-if="item[0] === '{'">
            {{ setUnwanted() }}
          </div>
        </div>
      </div>
      <hr />
      <input
        type="text"
        v-model="creditsvalue"
        placeholder="Add credit value..."
      />
      <v-btn color="success" class="mr-4" @click="addCredits">
        Add Credits
      </v-btn>
    </div>
    <div class="unWantedWarning" v-if="unwantedRubbish">
      <h1>Unwanted Rubbish</h1>
      <h3>
        This user has unwanted items in his/her saved games - Remove them?
      </h3>
      <v-btn color="success" class="mr-4" @click="removeUnwantedRubbish">
        Remove
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
      unwantedRubbish: false,
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
      this.$store.commit('setuser/updatePerson', clonededPerson.data)
      this.$store.commit('SET_PEOPLE', personData)
    },
    setUnwanted() {
      this.unwantedRubbish = true
    },
    removeUnwantedRubbish() {
      let personData = { ...this.$store.state.setuser.chosenPerson }
      let clonededPersonr = _.cloneDeep(personData)
      this.chosenUser.data.saved_games.forEach((value, index) => {
        console.log('index', index)
        if (value[0] === '{') {
          //lo0p around data and remove unwanted items
          console.log(this.chosenUser.data.saved_games[index])
          for (const [key, value] of Object.entries(
            this.chosenUser.data.saved_games[index]
          )) {
            if (!isNaN(key)) {
              delete clonededPersonr.data.saved_games[index][key]
            }
          }
          // this.chosenUser.data.saved_games[index].splice(index, 1)
        }
      })
      console.log('clonededPerson2', clonededPersonr)
      this.$store.commit('setuser/updatePerson', clonededPersonr.data)

      this.unwantedRubbish = true
      // this.$store.commit('SET_PEOPLE', personData)
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
<style scoped>
.unWantedWarning {
  background: white !important;
  border: 2px solid red !important;
}
</style>
