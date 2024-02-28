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
          <img src="/imgs/38.png" />
          <showBonusDetails chapterNumber="14" />
        </v-col>
        <v-col cols="12" md="6">
          <h1>The Academy - Chapter Fourteen</h1>

          <h4 class="clickable">
            <NuxtLink to="/chapter13Details">< Previous Chapter</NuxtLink> :
			<NuxtLink to="/chapter15Details">Next Chapter ></NuxtLink>
          </h4>
          <br />
		  <p>
            It's Friday at last and it's a brand new day at the Goodhead Academy.
			<br /><br />
			After an eventful week and a fun filled Thursday evening, it's time to start to unravel some of the mess that's been made.
			<br />
			Miss Goodhead has taken over and is quickly implementing her new regime.
			<br />
			Not everybody is happy about it, and a few people are looking to you to help them figure out what's going on...
			<br /><br />
			You need to determine who to help and how to help them...
			<br />
			It's not all hard work though, helping people does come with some more immediate rewards and revelations...
			<br /><br />
            <b>Chapter Fourteen</b> statistics : 2200 pages :  2500 images<br>
			: 6 bonus scenes : 40 achievements : 15 bonus achievements : 10 other achievements : 87% free to play content
            <br /><br />
            <b>NOTE:</b> You can play Chapter Fourteen without playing any of the previous chapters!
          </p>

          <hr>
		  <h3 class="clickable">
            <NuxtLink to="/chapter14">Skip the previous chapters and play Chapter Fourteen</NuxtLink>
          </h3>
		  <hr>
          <h3>Continue the story from a saved game</h3>

          <SavedGames chapter="14" />
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
h3,
h3 a {
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
