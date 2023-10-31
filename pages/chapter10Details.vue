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
          <img src="/imgs/25.png" />
        </v-col>
        <v-col cols="12" md="6">
          <h1>The Academy - Chapter Ten</h1>

          <h4 class="clickable">
            <NuxtLink to="/chapter9Details">< Previous Chapter</NuxtLink> :
            <NuxtLink to="/chapter11Details">Next Chapter ></NuxtLink>
          </h4>
          <br /><br />
          <p>
            Now that it's dark, the fun stuff can really start to happen...<br /><br />

            It could be an opportunity to continue getting to know Bridgette, if
            she is still with you.
            <br />
            But even without her, there are also a few other possibilities to
            entertain you. Maybe she would only cramp your style.
            <br /><br />
            Take a trip to see a movie, or perhaps enjoy the clear moonlit
            scenery up at the secluded viewpoint.
            <br />
            The choice is yours...
            <br /><br />
            All you really need to do is stay out of trouble.
            <br /><br />
            <b>Chapter Ten</b> statistics : 2610 pages : 3340 images : 2 bonus
            scenes : 25 date achievements : 20 solo achievements : 45 bonus
            achievements
            <br />
            <b>NOTE:</b> You must successfully complete Chapter Nine before you
            can play Chapter Ten!
          </p>

          <h2 class="clickable">
            <NuxtLink to="/profile"
              >Continue the story from a saved game</NuxtLink
            >
          </h2>

          <SavedGames chapter="10" />
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
