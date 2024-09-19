<template>
  <div id="app">
    <div class="search-wrapper">
      <label>Search email:</label>
      <input
        type="text"
        v-model="search"
        placeholder="Search email.."
        size="50"
      />
      <v-btn color="success" class="mr-4" @click="returnCurrent">
        Search
      </v-btn>

      <v-btn color="success" class="mr-4" @click="returnCurrentLike">
        Like
      </v-btn>
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
      <v-btn color="success" class="mr-4" @click="overwriteCredits">
        Overwrite Credits
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
    <v-row>
      <v-col cols="12">
        <v-btn color="success" class="mr-4" @click="returnAllDead">
          Show dead users
        </v-btn>
        <!-- Dead People {{ this.deadPeople }} -->
      </v-col>

      <v-col cols="12">
        <!-- loop araound this.deadPeople -->
        <div v-for="(item, index) in this.deadPeople" :key="index">
          {{ item.id }} || {{ item.data.email }} || {{ item.data.credits }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import _ from 'lodash'
export default {
  ...mapGetters('setuser', ['getchosenPerson', 'setPersonToDelete']),
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
    returnCurrentLike() {
      const that = this
      var returnedArray = []
      this.$store.dispatch('setuser/setPersonLike', this.search)

      return returnedArray
    },
    returnCurrent() {
      const that = this
      var returnedArray = []
      this.$store.dispatch('setuser/setPerson', this.search)

      return returnedArray
    },
    returnAllDead() {
      const that = this
      var returnedArray = []
      this.$store.dispatch('setuser/setPersonToDelete')

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
    overwriteCredits() {
      let personData = { ...this.$store.state.setuser.chosenPerson }
      let clonededPerson = _.cloneDeep(personData)
      clonededPerson.data.credits = parseInt(this.creditsvalue)
      this.$store.commit('setuser/updatePerson', clonededPerson.data)
      this.$store.commit('SET_PEOPLE', personData)
    },
    setUnwanted() {
      this.unwantedRubbish = true
    },
    removeUnwantedRubbish() {},
  },
  mounted() {},
  computed: {
    chosenUser() {
      return this.$store.state.setuser.chosenPerson
    },
    deadPeople() {
      return this.$store.state.setuser.deadPeople
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
