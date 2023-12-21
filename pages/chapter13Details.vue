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
          <img src="/imgs/36.png" />
          <showBonusDetails chapterNumber="13" />
        </v-col>
        <v-col cols="12" md="6">
          <h1>The Academy - Chapter Thirteen</h1>

          <h4 class="clickable">
            <NuxtLink to="/chapter12Details">< Previous Chapter</NuxtLink>
          </h4>
          <br /><br />
		  <h2>BETA VERSION</h2>

          <p>
            It's been a long and varied night with Bridgette.<br /><br />

            Time to spend the remainder of the evening back at her apartment.
            <br />
            Assuming you have any energy left, then it will be a lot of sexy fun and a great way to round out the evening.
            <br /><br />
            If you visited the strip club in Chapter 12 with Bridgette and Didi then there is a strong chance that Didi will pay you a visit too.
            <br />
            She may seem reluctant but she can be persuaded to join you...
            <br /><br />
            <b>Chapter Thirteen</b> statistics : 1800+ pages :  4700+ images : 2
            bonus extensions : TBC Bridgette achievements : TBC Didi achievements :
            TBC other achievements : TBC Threesome achievements
            <br />
            <b>NOTE:</b> You must successfully complete Chapter Twelve with Bridgette before
            you can play Chapter Thirteen!
          </p>

          <h2 class="clickable">
            <NuxtLink to="/profile"
              >Continue the story from a saved game</NuxtLink
            >
          </h2>

          <SavedGames chapter="13" />
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
