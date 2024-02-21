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
          <img src="/imgs/24.png" />
          <showBonusDetails chapterNumber="9" />
        </v-col>
        <v-col cols="12" md="6">
          <h1>The Academy - Chapter Nine</h1>

          <h4 class="clickable">
            <NuxtLink to="/chapter8Details">< Previous Chapter</NuxtLink> :
            <NuxtLink to="/chapter10Details">Next Chapter ></NuxtLink>
          </h4>
          <br /><br />
          <p>
            It's been a long week that's been full of challenges at the Goodhead
            Academy.<br /><br />

            But Thursday evening is a chance to put your work aside, unwind and
            really have some fun.
            <br />
            Maybe you can go out on a date with Bridgette, or perhaps you prefer
            to go out exploring on your own.
            <br />
            There are some new places to visit and many new people to meet.
            <br /><br />
            Thursday evening is also an opportunity to see everything else that
            happens when you go looking.
            <br /><br />
            And if your date with Bridgette doesn't work out then there are
            always other options to consider.
            <br /><br />
            <b>Chapter Nine</b> statistics : 2370 pages : 3640 images : 1 bonus
            scene : 25 date achievements : 20 solo achievements : 5 bonus
            achievements : 60 additional achievements
            <br />
            <b>NOTE:</b> You must successfully complete Chapter Eight before you
            can play Chapter Nine!
          </p>

          <hr>
          <h2>Continue the story from a saved game</h2>

          <SavedGames chapter="9" />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
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
