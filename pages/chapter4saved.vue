<template>
  <main>
    <NavBar />
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1></h1>
          <div class="container">
            <iframe
              src="../chapter4/game/checksave4.html"
              width="100%"
              height="auto"
              style="border: 1px solid #eee; background: white"
              frameborder="0"
              scrolling="yes"
              class="video"
              id="iframeContent"
            ></iframe>
            <!-- <h2>Currently Unavailable</h2> -->
          </div>

          <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->

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
          <!-- End of generic modal -->

          <v-dialog v-model="dialog" width="500">
            <v-card class="pa5 modalbackground">
              <v-btn color="primary" text @click="dialog = false"> X </v-btn>
              <DisplayCredits
                :currentCreditsneeded="currentCreditsneeded"
                :currentmodule="currentmodule"
              />
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogSave" width="500">
            <v-card class="pa5 modalbackground">
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
import { mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      dialog: false,
      dialogSave: false,
      cookieJson: '',
      currentCreditsneeded: [],
      currentmodule: '',
      route: '',
      genericModalAction: '',
      backgroundImage: '/imgs/modals/modal_principal1.jpg',
      bonusRedirectUrl: '',
      dialogInteraction: false,
    }
  },
  computed: {
    ...mapActions(['updatePerson']),
    userDetails() {
      if (this.$store.state.person) {
        return this.$store.state.person
      }
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
      var parsedobj = JSON.parse(
        JSON.stringify(this.$store.state.setCurrentGame.chosenAcheivements)
      )
      return parsedobj
    },
    greet(event) {
      // `event` is the native DOM event
      if (event) {
        this.dialog = true
        const myArray = event.split('|')
        this.currentCreditsneeded = parseInt(myArray[1])
        this.currentmodule = myArray[0]
      }
    },
    getPlayerName() {
      if (this.$store.state.person) {
        return this.$store.state.person.name
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
          await this.$store.commit('setCurrentGame/addAchievements', event)
          this.cookieJson = event
          this.dialogSave = true
          this.route = route
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
  height: 1000px;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
}
</style>
<style>
.genericModal {
  height: 250px;
}
</style>
