<template>
  <main>
    <NavBar />
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1></h1>
          <div class="container">
            <iframe
              src="../academy_intro/game/start_intro.html"
              width="100%"
              height="auto"
              style="border: 1px solid #eee; background: white"
              frameborder="0"
              scrolling="yes"
              class="video"
              id="iframeContent"
            ></iframe>
          </div>

          <!-- Modal for All other actions-->
          <v-dialog v-model="dialogInteraction" width="500">
            <v-card
              class="pa-5 genericModal"
              :style="{ backgroundImage: `url(${backgroundImage})` }"
            >
              <v-btn color="primary" text @click="dialogInteraction = false">
                X
              </v-btn>
              <h1 :v-show="genericModalAction == ''">Play this bonus again</h1>
              <v-btn color="primary" text @click="triggerBonusReplay()">
                Replay Bonus
              </v-btn>
            </v-card>
          </v-dialog>
          <!-- End of generci modal -->

          <v-dialog v-model="dialog" width="500">
            <v-card
              class="pa5 modalbackground"
              :style="{ backgroundImage: `url(${backgroundImage})` }"
            >
              <v-btn color="primary" text @click="dialog = false"> X </v-btn>
              <DisplayCredits
                :currentCreditsneeded="currentCreditsneeded"
                :currentmodule="currentmodule"
              />
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogSave" width="500">
            <v-card>
              <v-btn color="primary" text @click="dialogSave = false">
                X
              </v-btn>
              <h1>Save Game</h1>
              <SaveGame :cookieJson="cookieJson" :route="route" />
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      dialog: false,
      dialogSave: false,
      dialogInteraction: false,
      cookieJson: '',
      currentCreditsneeded: [],
      currentmodule: '',
      route: '',
      genericModalAction: '',
      backgroundImage: '/imgs/modals/modal_BG.jpg',
      bonusRedirectUrl: '',
    }
  },
  computed: {
    ...mapActions(['updatePerson']),
    ...mapGetters('setCurrentGame', ['getAchievements']),
    userDetails() {
      if (this.$store.state.person) {
        return this.$store.state.person
      }
    },
    Achievements() {
      return this.$store.state.chosenAcheivements
    },
  },
  methods: {
    replayBonus(bonusString) {
      //split bonusString by | and return
      var bonusSplit = bonusString.split('|')
      if (bonusSplit.length > 1) {
        this.backgroundImage = bonusSplit[0] //First part of string should be the img as '/imgs/modals/modal_amy1.jpg', Ignoring the static string
        this.bonusRedirectUrl = bonusSplit[1] //Second part of string should be the url to replace the iframe with
      }
      if (bonusSplit.length > 2) {
        //Future use
        this.genericModalAction = bonusSplit[2] //Changes the behaviour of the modal...
      }
      this.dialogInteraction = true
    },
    triggerBonusReplay() {
      document.getElementById('iframeContent').src = this.bonusRedirectUrl
      this.dialogInteraction = false
    },
    AddCredits() {
      this.dialog = true
    },
    returnAchievements() {
      console.log(this.$store.state.setCurrentGame.chosenAcheivements)
      return this.$store.state.setCurrentGame.chosenAcheivements
    },
    greet(event) {
      // `event` is the native DOM event
      if (event) {
        this.dialog = true
        const myArray = event.split('|')
        this.currentCreditsneeded = parseInt(myArray[1])
        this.currentmodule = myArray[0]

        if (myArray[2]) {
          this.backgroundImage = myArray[2]
        }
      }
    },
    Getname() {
      if (this.$store.state.person) {
        return this.$store.state.person
      }
    },
    checkAvailable(id) {
      //check that the user is logged in (likely)
      if (!this.$store.state.user.uid) {
        return false
      } else {
        //Logged in check for available
        if (this.$store.state.person.available_modules.length > 0) {
          if (this.$store.state.person.available_modules.includes(id)) {
            //user has already bought the module change the button on the iframe src
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      }
    },
    async saveProgress(event, route) {
      //check that the user is logged in (likely)

      if (!this.$store.state.user.uid) {
        return false
      } else {
        if (event) {
          this.cookieJson = event
          await this.$store.commit('setCurrentGame/addAchievements', event)
          this.dialogSave = true
          route = route
        }
        // //Logged in check for available
        // if(this.$store.state.person.available_modules.length > 0){
        //     if(this.$store.state.person.available_modules.includes(id)) {
        //         //user has already bought the module change the button on the iframe src
        //         return true
        //     } else {
        //         return false
        //     }

        // } else {
        //     return false
        // }
      }
    },
    beforeWindowUnload(e) {
      if (this.form_dirty) {
        e.preventDefault()
        e.returnValue = ''
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.form_dirty) {
      next(false)
      window.location = to.path // this is the trick
    } else {
      next()
    }
  },

  beforeDestroy() {
    window.removeEventListener('beforeunload', this.beforeWindowUnload)
  },

  mounted() {
    window.c_1 = this
  },
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100px;
  max-height: 1000px;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
}
.genericModal {
  height: 250px;
}
</style>
