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
          <img src="/imgs/26.png" />
          <showBonusDetails chapterNumber="11" />
        </v-col>
        <v-col cols="12" md="6">
          <h1>The Academy - Chapter Eleven</h1>

          <h4 class="clickable">
            <NuxtLink to="/chapter10Details">< Previous Chapter</NuxtLink> :
            <NuxtLink to="/chapter12Details">Next Chapter ></NuxtLink>
          </h4>
          <br /><br />
          <p>
            You've made it to the Brass Pole nightclub!<br /><br />

            If you are still on your date with Bridgette then this could be just
            the test that your relationship needs.
            <br />
            In a nightclub full of other temptations it might just be too much
            to resist.
            <br /><br />
            Amy, Alicia, Laura and Lola and a whole host of other girls are all
            there to dance with you.
            <br />
            But will you just be dancing...
            <br /><br />
            <b>Chapter Eleven</b> statistics : 2340 pages : 3645 images : 2
            bonus scenes : 15 date achievements : 35 nightclub achievements : 20
            other achievements : 30 bonus achievements
            <br />
            <b>NOTE:</b> You must successfully complete Chapter Ten before you
            can play Chapter Eleven!
          </p>

          <h2 class="clickable">
            <NuxtLink to="/profile"
              >Continue the story from a saved game</NuxtLink
            >
          </h2>

          <SavedGames chapter="11" />
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
