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
          <img src="/imgs/39.png" />
          <showBonusDetails chapterNumber="15" />
        </v-col>
        <v-col cols="12" md="6">
          <h1>The Academy - Chapter Fifteen</h1>

          <h4 class="clickable">
            <NuxtLink to="/chapter14Details">< Previous Chapter</NuxtLink> :
			<NuxtLink to="/chapter16Details">Next Chapter ></NuxtLink>
			
          </h4>
          <br />
		  <p>
            After a busy Friday morning, you sure have some tough decisions to make...
			<br /><br />
			Who will you, or more to the point, who can you help in your quest to unravel the remaining mysteries at the Goodhead Academy?
			<br /><br />
			Bridgette and Didi obviously need your help, but you could also see what comes of assisting Annie and Principal Valentine.
			<br /><br />
			Then of course there are other girls who want to meet up spend some time with you on your last day.
			<br /><br />
			It's going to be difficult to fit it all in!
			<br /><br />
            <b>Chapter Fifteen</b> statistics : 2300 pages : 3500 images<br>
			: 4 bonus scenes : 35 achievements : 55 bonus achievements : 63% free to play content
            <br /><br />
            <b>NOTE:</b> You must successfully complete Chapter Fourteen before
            you can play Chapter Fifteen!
          </p>

          <hr>
          <h3>Continue the story from a saved game</h3>

          <SavedGames chapter="15" />
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
