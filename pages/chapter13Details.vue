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
		  
          <p>
            It's the end of Thursday night and your date with Bridgette is coming to it's conclusion.
			<br /><br />
            Time to spend the remainder of the evening back at her apartment.
            <br />
            Assuming you have any energy left, then it will be a lot of sexy fun and a great way to round out the night.
            <br /><br />
            If you visited the strip club in Chapter 12 with Bridgette and Didi then there is a strong chance that Didi will pay you a visit too.
            <br />
            Didi may seem reluctant but she can be persuaded to join you...
            <br /><br />
			Whatever happens, Bridgette will be eager to make the most of her time in private with you.
			<br /><br />
            <b>Chapter Thirteen</b> statistics : 1900 pages :  4800 images<br>
			: 2 bonus scene extensions : 45 Bridgette achievements : 37 other achievements<br>
            : 25 Didi achievements : 30 Threesome achievements
            <br /><br />
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
