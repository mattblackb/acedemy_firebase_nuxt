<template>
  <div>
    <h2>Bonuses available for chapter {{ chapterNumber }}</h2>

    <p>Bonuses in this chapter:</p>
    <ul>
      <li v-for="game in chapters" :key="game.id">
        Cost: <b>{{ game.cost }}</b> | Description:
        <b>{{ game.description }} </b>| Status
        <b v-show="buttonLocked(game.status, 'locked')"> Locked </b>
        <b v-show="!buttonLocked(game.status, 'unlocked')"> Unlocked </b>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    chapterNumber: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      games: [],
    }
  },
  mounted() {
    this.getGames()
  },
  methods: {
    ...mapGetters('stories', ['getStories']),
    buttonLocked(status, unlocked) {
      console.log('buttonLocked', status)
      if (status === 'locked') {
        return true
      } else {
        return false
      }
    },
    getGames() {
      let storiesData = this.$store.getters['stories/getStories']

      // Assuming you have a Vuex store set up with a games module
      //   this.games = this.$store.state.games.filter(
      //     (game) => game.chapter === this.chapterNumber
      //   )
    },
    //check person state for available_modules
    checkModuleAvailable(chapoerid) {
      let personData = this.$store.state.person
      let available_modules = personData.available_modules
      let moduleAvailable = false
      available_modules.forEach((module) => {
        if (module === chapoerid) {
          moduleAvailable = true
        }
      })
      return moduleAvailable
    },

    splitIntoChapters(modules) {
      const chapters = []
      modules.forEach((module) => {
        const chapterName = module.description
        //Split chapterName into array of words by space then check the second word is equal to 1

        var words = chapterName.split(' ')
        if (words[1] === this.chapterNumber) {
          if (this.checkModuleAvailable(module.id)) {
            module['status'] = 'available'
          }
          if (module['status'] === undefined) {
            module['status'] = 'locked'
          }
          chapters.push(module)
        }
      })
      return chapters
    },
  },
  computed: {
    chapters: {
      get() {
        const allmodules = this.$store.state.stories.stories
        const available_modules = this.splitIntoChapters(allmodules)
        return available_modules
      },
    },
    bonus: {
      get() {
        //split this.$store.state.person.available_modules into array with chapters based on name where Chapter 1 to 20
        const available_modules = this.$store.state.stories.stories
        return this.$store.state.person.available_modules
      },
    },
  },
}
</script>
