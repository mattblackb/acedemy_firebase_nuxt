<template>
  <main>
    <NavBar />
    <v-container>
      <v-row>
        <v-col cols="12" md="6">      <img src="/imgs/4.png" /></v-col>
        <v-col cols="12" md="6">
          <h1>The Academy - Chapter Three</h1>
		  
		  <h4 class="clickable" > <NuxtLink to="/chapter2Details">< Previous Chapter</NuxtLink> : <NuxtLink to="/chapter4Details">Next Chapter ></NuxtLink></h4>
<br/><br/>

          <p>
            Time to return for your second day of work at the Goodhead
            Academy... That's if you didn't get fired already!<br /><br />

            Fulfil Bridgette's request to help her out in the photography studio
            and get to know all the girls a little better.
            <br /><br />
            It's entirely up to you who you choose to assist more closely. The
            girls all love a bit of extra attention.
            <br /><br />
            Have a good time!
            <br /><br />
            <b>Chapter Three</b> statistics : 830 pages : 770 images : 1 bonus
            scene : 25 achievements : 5 bonus achievements
            <br />
            <b>NOTE:</b> You must successfully complete Chapter Two before you
            can play Chapter Three!
          </p>

          <h2 class="clickable">
            <NuxtLink to="/profile"
              >Continue the story from a saved game</NuxtLink
            >
          </h2>
          <div
            v-for="savedintroduction in dayonenGame3"
            :key="savedintroduction.name"
          >
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  savedintroduction,
                  '/chapter3saved?saved=true'
                )
              "
              >{{ savedintroduction.date }} | View Chapter Three achievements |</span
            >
  
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  savedintroduction,
                  '/chapter3saved?saved=true'
                )
              "
            >
              Play chapter Four</span
            >
            <!-- <span class="clickable" @click="deleteSave(savedintroduction)"
              >| Delete
            </span> -->
          </div>
     
        </v-col>
      </v-row>
    </v-container>
    <div v-if="showloading" class="loading">
      <img src="/VAyR.gif" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
export default {
  data() {
    return {
      savedintroductions: [],
      introchosen: {},
      showIntroduction: false,
      showSaved: false,
      showloading: false,
    }
  },
  methods: {
    setIntroduction(introductionObject) {
      this.introchosen = introductionObject
      this.showIntroduction = true
    },
    async setIntroductionRedirect(introductionObject, page) {
      this.showloading = true
      this.introchosen = introductionObject
      this.showIntroduction = true

      await this.$store.commit(
        'setCurrentGame/addAchievements',
        introductionObject
      )
      setTimeout(() => {
        this.showloading = false
        this.$router.push(page)
      }, 3000)
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
    dayonenGame3() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (game.ch3_complete === '1' && !game.ch4_complete) {
            console.log('game3', game.ch3_complete, index)
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
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
}
 h4, h4 a { color: white; text-decoration: none}
</style>
<style scoped>
.clickable {
  cursor: pointer;
}
.loading {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: block;
  background-color: rgba(255, 255, 255, 0.5);
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
