<template>
  <v-row class="pa-5">
    <p>{{ currentMessage }}</p>
    <h1>Save Game</h1>
    <h4>You can add a description to this save if you wish</h4>
    <v-text-field v-model="description" label="Description"></v-text-field>
    <v-btn @click="saveEpisode" color="primary">Save Game</v-btn>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentBuy: this.$route.name,
      selectedStory: {},
      currentMessage: '',
      storyId: '',
      cookies: {},
      description: '',
      currentPerson: {},
    }
  },
  watch: {
    // cookieJson(newValue) {
    //      console.log('cookieJson changed to: ', newValue, 'route', this.route)
    //   this.setSave(newValue)
    // },
  },
  props: {
    cookieJson: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: false,
    },
    dialogSave: {
      type: Boolean,
      required: false,
    },
    closeWindow: {
      type: Function,
      required: false,
    },
  },
  methods: {
    ...mapGetters('stories', ['getStories']),
    setSave(newSessionData) {
      //   alert('changed your route')
      //   console.log('Route', this.route)
      this.saveEpisode(newSessionData)
    },

    saveEpisode(newSessionData) {
      let personData = JSON.parse(JSON.stringify(this.$store.state.person))
      const today = new Date()
      const yyyy = today.getFullYear()
      let mm = today.getMonth() + 1 // Months start at 0!
      let dd = today.getDate()

      if (dd < 10) dd = '0' + dd
      if (mm < 10) mm = '0' + mm

      const formattedDate = dd + '/' + mm + '/' + yyyy

      //turn json object to string
      this.cookies = JSON.stringify(this.cookieJson)
      console.log('this.cookies', this.cookies)
      //create an array to stor chapte rname and cookies
      let chapterArray = {}
      chapterArray['gameDetails'] = this.cookieJson
      chapterArray['dateSaved'] = formattedDate
      chapterArray['chapterSaved'] = this.route
      chapterArray['description'] = this.description
      personData.saved_games.push(chapterArray)
      this.$store.commit('setuser/updatePerson', personData)
      this.$store.commit('SET_PEOPLE', personData)
      this.currentPerson = personData
      this.currentMessage =
        'This game has been saved. You can see this game in your profile'

      this.closeWindow()
    },
  },
  mounted() {
    console.log('MOUNTED')
    if (this.route != '') {
      var decodedData = decodeURIComponent(this.cookieJson)
      // decodedData= atob(decodedData);
      var jsonObject = JSON.parse(decodedData)
      if (this.route != '') {
        jsonObject['episode'] = this.route
        console.log(jsonObject['episode'])
      }

      this.cookies = jsonObject
      // this.saveEpisode()
    }
  },
}
</script>
