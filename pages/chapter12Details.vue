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
          <img src="/imgs/27.png" />
        </v-col>
        <v-col cols="12" md="6">
          <h1>The Academy - Chapter Twelve</h1>

          <h4 class="clickable">
            <NuxtLink to="/chapter11Details">< Previous Chapter</NuxtLink>
          </h4>
          <br /><br />

          <p>
            Time to sample the delights of the Pink Pussy strip club!<br /><br />

            Bridgette likes new experiences but will visiting a strip club be
            one step too far?
            <br />
            Even without, or perhaps especially without Bridgette you are sure
            to have a whole lot of fun with all the sexy and exotic performers.
            <br /><br />
            Then of course there is also the possibility of meeting up with Didi
            too.
            <br />
            You did remember to invite her right...?
            <br /><br />
            <b>Chapter Twelve</b> statistics : 3540 pages : 5050 images : 5
            bonus scenes : 30 date achievements : 35 strip club achievements :
            10 other achievements : 95 bonus achievements
            <br />
            <b>NOTE:</b> You must successfully complete Chapter Eleven before
            you can play Chapter Twelve!
          </p>

          <h2 class="clickable">
            <NuxtLink to="/profile"
              >Continue the story from a saved game</NuxtLink
            >
          </h2>

          <SavedGames chapter="12" />
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
