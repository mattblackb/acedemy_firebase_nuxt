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
          <img src="/imgs/42.png" />
          <showBonusDetails chapterNumber="16" />
        </v-col>
        <v-col cols="12" md="6">
          <h1>The Academy - Chapter Sixteen : Part Two</h1>

          <h4 class="clickable">
            <NuxtLink to="/chapter16Details">< Part One</NuxtLink> :
			
          </h4>
          <br />
		  <p>
            <h2>NEW INSTALLMENT COMING SOON</h2>
			The working week concludes at Goodhead Academy
          </p>

          <hr>
          <h3>Continue the story from a saved game</h3>

          <SavedGames chapter="16" />
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
