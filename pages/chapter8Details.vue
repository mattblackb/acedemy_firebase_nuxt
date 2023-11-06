<template>
  <main>
    <NavBar />
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <DisplayAchievmentsintroduction
            v-if="introchosen.episode == 'introduction' && showSaved"
            :introAchievments="introchosen"
          />
          <img src="/imgs/20.png" />
          <showBonusDetails chapterNumber="8" />
        </v-col>
        <v-col cols="12" md="6">
          <h1>The Academy - Chapter Eight</h1>

          <h4 class="clickable">
            <NuxtLink to="/chapter7Details">< Previous Chapter</NuxtLink> :
            <NuxtLink to="/chapter9Details">Next Chapter ></NuxtLink>
          </h4>
          <br /><br />
          <p>
            Thursday afternoon is a very critical time at the Goodhead
            Academy<br /><br />

            Everything rests on how things go for Principal Valentine.
            <br />
            Olivia Goodhead is out to get her... Bridgette and Didi also want
            her gone...
            <br />
            But will she come undone after everything you have found out about
            her and everything that's been happening?
            <br /><br />
            You have some time to kill before you find out the result later on
            in the afternoon.
            <br /><br />
            While everybody is busy thrashing out the details with Governor
            Ramsey, you can figure out who else and how else you can help.
            <br /><br />
            <b>Chapter Eight</b> statistics : 2090 pages : 3390 images : 4 bonus
            scenes : 35 achievements : 45 bonus achievements
            <br />
            <b>NOTE:</b> You must successfully complete Chapter Seven before you
            can play Chapter Eight!
          </p>

          <h2 class="clickable">
            <NuxtLink to="/profile"
              >Continue the story from a saved game</NuxtLink
            >
          </h2>

          <SavedGames chapter="8" />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      savedintroductions: [],
      introchosen: {},
      showIntroduction: false,
      showSaved: false,
    }
  },
  methods: {
    setIntroduction(introductionObject) {
      this.introchosen = introductionObject
      this.showIntroduction = true
    },
    randomItem() {
      return this.images[Math.floor(Math.random() * this.images.length)]
    },
  },
  computed: {
    userDetails() {
      if (this.$store.state.person) {
        return this.$store.state.person
      }
    },
    introductionGame() {
      if (this.$store.state.person) {
        return this.$store.state.person.saved_games.filter(
          (game) => game.episode === 'introduction'
        )
      }
    },
    dayonenGame() {
      if (this.$store.state.person) {
        return this.$store.state.person.saved_games.filter(
          (game) => game.episode === 'dayone'
        )
      }
    },
    dayonenGame2() {
      if (this.$store.state.person) {
        return this.$store.state.person.saved_games.filter(
          (game) => game.episode === 'dayone2'
        )
      }
    },
  },
}
</script>
<style scoped>
.clickable {
  cursor: pointer;
}
h2,
h2 a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}

h4,
h4 a {
  color: white;
  text-decoration: none;
}
</style>
