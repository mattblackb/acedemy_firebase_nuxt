<template>
  <main>
    <NavBar />
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Welcome to your profile {{ userDetails.name }}</h1>
          <h2 v-if="userDetails">
            Available Credits: {{ userDetails.credits }}
          </h2>
          <ChangeName />
          <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
          <h2>Your Saved Games</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <a href="/introductionDetails"><img src="/imgs/index_intro.jpg" /></a>
          <div
            v-for="savedintroduction in introductionGame"
            :key="savedintroduction.name"
          >
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  savedintroduction,
                  '/introductionsaved?saved=true'
                )
              "
              >{{ savedintroduction.date }} | View Introduction
              achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  savedintroduction,
                  '/introductionsaved?saved=true'
                )
              "
            >
              Play Chapter One</span
            >
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <a href="/chapter1Details"><img src="/imgs/index_ch1.jpg" /></a>
          <div v-for="chapter1saved in chapter1" :key="chapter1saved.name">
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter1saved,
                  '/chapter1saved?saved=true'
                )
              "
            >
              {{ chapter1saved.date }} | View Chapter One achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter1saved,
                  '/chapter1saved?saved=true'
                )
              "
            >
              Play Chapter Two</span
            >
            <span class="clickable" @click="deleteSave(chapter1saved)"
              >| Delete
            </span>
          </div>
        </v-col>
        <v-col cols="6">
          <a href="/chapter2Details"><img src="/imgs/index_ch2.jpg" /></a>
          <div v-for="chapter2saved in chapter2" :key="chapter2saved.name">
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter2saved,
                  '/chapter2saved?saved=true'
                )
              "
              >{{ chapter2saved.date }} | View Chapter Two achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter2saved,
                  '/chapter2saved?saved=true'
                )
              "
            >
              Play Chapter Three</span
            >
            <span class="clickable" @click="deleteSave(chapter2saved)"
              >| Delete
            </span>
          </div>
        </v-col>
        <v-col cols="6">
          <a href="/chapter3Details"><img src="/imgs/index_ch3.jpg" /></a>
          <div v-for="chapter3saved in chapter3" :key="chapter3saved.name">
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter3saved,
                  '/chapter3saved?saved=true'
                )
              "
              >{{ chapter3saved.date }} | View Chapter Three achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter3saved,
                  '/chapter3saved?saved=true'
                )
              "
            >
              Play Chapter Four</span
            >
            <span class="clickable" @click="deleteSave(chapter3saved)"
              >| Delete
            </span>
          </div>
        </v-col>
        <v-col cols="6">
          <a href="/chapter4Details"><img src="/imgs/index_ch4.jpg" /></a>
          <div v-for="chapter4saved in chapter4" :key="chapter4saved.name">
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter4saved,
                  '/chapter4saved?saved=true'
                )
              "
              >{{ chapter4saved.date }} | View Chapter Four achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter4saved,
                  '/chapter4saved?saved=true'
                )
              "
            >
              Play Chapter Five</span
            >
            <span class="clickable" @click="deleteSave(chapter4saved)"
              >| Delete
            </span>
          </div>
        </v-col>
        <v-col cols="6">
          <a href="/chapter5Details"><img src="/imgs/index_ch5.jpg" /></a>
          <div v-for="chapter5saved in chapter5" :key="chapter5saved.name">
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter5saved,
                  '/chapter5saved?saved=true'
                )
              "
              >{{ chapter5saved.date }} | View Chapter Five achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter5saved,
                  '/chapter5saved?saved=true'
                )
              "
            >
              Play Chapter Six</span
            >
            <span class="clickable" @click="deleteSave(chapter5saved)"
              >| Delete
            </span>
          </div>
        </v-col>
        <v-col cols="6">
          <a href="/chapter6Details"><img src="/imgs/index_ch6.jpg" /></a>
          <div v-for="chapter6saved in chapter6" :key="chapter6saved.name">
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter6saved,
                  '/chapter6saved?saved=true'
                )
              "
              >{{ chapter6saved.date }} | View Chapter Six achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter6saved,
                  '/chapter6saved?saved=true'
                )
              "
            >
              Play Chapter Seven</span
            >
            <span class="clickable" @click="deleteSave(chapter6saved)"
              >| Delete
            </span>
          </div>
        </v-col>
        <v-col cols="6">
          <a href="/chapter7Details"><img src="/imgs/index_ch7.jpg" /></a>
          <div v-for="chapter7saved in chapter7" :key="chapter7saved.name">
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter7saved,
                  '/chapter7saved?saved=true'
                )
              "
              >{{ chapter7saved.date }} | View Chapter Seven achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter7saved,
                  '/chapter7saved?saved=true'
                )
              "
            >
              Play Chapter Eight</span
            >
            <span class="clickable" @click="deleteSave(chapter7saved)"
              >| Delete
            </span>
          </div>
        </v-col>
        <v-col cols="6">
          <a href="/chapter8Details"><img src="/imgs/index_ch8.jpg" /></a>
          <div v-for="chapter8saved in chapter8" :key="chapter8saved.name">
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter8saved,
                  '/chapter8saved?saved=true'
                )
              "
              >{{ chapter8saved.date }} | View Chapter Eight achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter8saved,
                  '/chapter8saved?saved=true'
                )
              "
            >
              Play Chapter Nine</span
            >
            <span class="clickable" @click="deleteSave(chapter8saved)"
              >| Delete
            </span>
          </div>
        </v-col>
        <v-col cols="6">
          <a href="/chapter9Details"><img src="/imgs/index_ch9.jpg" /></a>
          <div v-for="chapter9saved in chapter9" :key="chapter9saved.name">
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter9saved,
                  '/chapter9saved?saved=true'
                )
              "
              >{{ chapter9saved.date }} | View Chapter Nine achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter9saved,
                  '/chapter9saved?saved=true'
                )
              "
            >
              Play Chapter Ten</span
            >
            <span class="clickable" @click="deleteSave(chapter9saved)"
              >| Delete
            </span>
          </div>
        </v-col>
        <v-col cols="6">
          <a href="/chapter10Details"><img src="/imgs/index_ch10.jpg" /></a>
          <div v-for="chapter10saved in chapter10" :key="chapter10saved.name">
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter10saved,
                  '/chapter10saved?saved=true'
                )
              "
              >{{ chapter10saved.date }} | View Chapter Ten achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter10saved,
                  '/chapter10saved?saved=true'
                )
              "
            >
              Play Chapter Eleven</span
            >
            <span class="clickable" @click="deleteSave(chapter10saved)"
              >| Delete
            </span>
          </div>
        </v-col>
        <v-col cols="6">
          <a href="/chapter11Details"><img src="/imgs/index_ch11.jpg" /></a>
          <div v-for="chapter11saved in chapter11" :key="chapter11saved.name">
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter11saved,
                  '/chapter11saved?saved=true'
                )
              "
              >{{ chapter11saved.date }} | View Chapter Eleven achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter11saved,
                  '/chapter11saved?saved=true'
                )
              "
            >
              Play Chapter Twelve</span
            >
            <span class="clickable" @click="deleteSave(chapter11saved)"
              >| Delete
            </span>
          </div>
        </v-col>
		<v-col cols="6">
          <a href="/chapter12Details"><img src="/imgs/index_ch12.jpg" /></a>
          <div v-for="chapter12saved in chapter12" :key="chapter12saved.name">
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter12saved,
                  '/chapter12saved?saved=true'
                )
              "
              >{{ chapter12saved.date }} | View Chapter Twelve achievements</span
            >
            |
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  chapter12saved,
                  '/chapter12saved?saved=true'
                )
              "
            >
              Play Chapter Thirteen</span
            >
            <span class="clickable" @click="deleteSave(chapter12saved)"
              >| Delete
            </span>
          </div>
        </v-col>
		<v-col cols="6">
          <a href="/"><img src="/imgs/index_ch13_locked.jpg" /></a>
        </v-col>
        <v-col cols="6">
          <a href="/"><img src="/imgs/index_ch14_locked.jpg" /></a>
        </v-col>
		</v-col>
		<v-col cols="6">
          <a href="/"><img src="/imgs/index_ch15_locked.jpg" /></a>
        </v-col>
        <v-col cols="6">
          <a href="/"><img src="/imgs/index_ch16_locked.jpg" /></a>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" width="500">
        <v-card class="pa5 modalbackground">
          <v-btn color="primary" text @click="dialog = false"> X </v-btn>
          <h3>Delete this save?</h3>
          <v-btn color="primary" depressed @click="dialog = false"> No </v-btn>
          <v-btn color="warning" depressed @click="commitDelete()"> Yes </v-btn>
        </v-card>
      </v-dialog>

      <v-btn @click="$router.push('/auth/signout')">Logout</v-btn>

      <!-- <v-row>
         <v-col cols="8">
            <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction'" :introAchievments="introchosen" />
            <DisplayAchievementschapter1 v-if="introchosen.episode == 'chapter1'" :introAchievments="introchosen" />
            <DisplayAchievementschapter2 v-if="introchosen.episode == 'chapter2'" :introAchievments="introchosen" />
          </v-col>
       </v-row> -->
    </v-container>
    <div v-if="showloading" class="loading">
      <img src="/VAyR.gif" />
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'
export default {
  data() {
    return {
      dialog: false,
      savedintroductions: [],
      introchosen: {},
      showIntroduction: false,
      showloading: false,
      deleteObject: {},
    }
  },
  methods: {
    ...mapActions(['updatePerson']),
    ...mapGetters('setCurrentGame', ['addAchievements']),
    asyncsetState(introductionObject) {
      this.showloading = true
      return new Promise((resolve) => {
        this.$store.commit('setCurrentGame/addAchievements', introductionObject)
      })
    },
    commitDelete() {
      this.$store.commit('setuser/updatePerson', this.deleteObject)
      this.$store.commit('SET_PEOPLE', this.deleteObject)
      this.dialog = false
    },
    deleteSave(introductionObject) {
      var orderAllData = _.cloneDeep(this.$store.state.person)
      this.dialog = true
      //remove from aray at index

      orderAllData.saved_games.splice(parseInt(introductionObject.index), 1)
      this.deleteObject = orderAllData
      console.log('DeleteObject', this.deleteObject)
    },
    setIntroduction(introductionObject) {
      this.introchosen = introductionObject
      this.showIntroduction = true
      this.$store.commit('setCurrentGame/addAchievements', this.introchosen)
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

      //  this.showloading = false;
      //       this.$router.push({
      //     path: page
      // })
    },
  },
  computed: {
    chosenAchievements() {
      return this.$store.state.chosenAchievements
    },
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
    chapter1() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (
            game.ch1_complete === '1' &&
            game.ch2_complete != 0 &&
            !game.ch2_complete
          ) {
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
      }
    },
    chapter2() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (
            game.ch2_complete === '1' &&
            game.ch3_complete != 0 &&
            !game.ch3_complete
          ) {
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
      }
    },
    chapter3() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (
            game.ch3_complete === '1' &&
            game.ch4_complete != 0 &&
            !game.ch4_complete
          ) {
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
      }
    },
    chapter4() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (
            game.ch4_complete === '1' &&
            game.ch5_complete != 0 &&
            !game.ch5_complete
          ) {
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
      }
    },
    chapter5() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (
            game.ch5_complete === '1' &&
            game.ch6_complete != 0 &&
            !game.ch6_complete
          ) {
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
      }
    },
    chapter6() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (
            game.ch6_complete === '1' &&
            game.ch7_complete != 0 &&
            !game.ch7_complete
          ) {
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
      }
    },
    chapter7() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (
            game.ch7_complete === '1' &&
            game.ch8_complete != 0 &&
            !game.ch8_complete
          ) {
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
      }
    },
    chapter8() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (
            game.ch8_complete === '1' &&
            game.ch9_complete != 0 &&
            !game.ch9_complete
          ) {
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
      }
    },
    chapter9() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (
            game.ch9_complete === '1' &&
            game.ch10_complete != 0 &&
            !game.ch10_complete
          ) {
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
      }
    },
    chapter10() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (
            game.ch10_complete === '1' &&
            game.ch11_complete != 0 &&
            !game.ch11_complete
          ) {
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
      }
	},
    chapter11() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (
            game.ch11_complete === '1' &&
            game.ch12_complete != 0 &&
            !game.ch12_complete
          ) {
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
      }
	 },
    chapter12() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (
            game.ch12_complete === '1' &&
            game.ch13_complete != 0 &&
            !game.ch13_complete
          ) {
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
