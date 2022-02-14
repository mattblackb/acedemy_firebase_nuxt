<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
      <v-col cols="10">

    <h1>Introduction</h1>
<div class="container">
     <iframe
      src="academy_intro/game/buycredits_test.html"
      width="100%"
      height= auto
      style="border: 1px solid #EEE; background: white"
      frameborder="0"
      scrolling="no"
      class="video"
    ></iframe>
</div>


    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
    <v-btn @click="AddCredits()">Add Credits</v-btn>
        <v-dialog
        v-model="dialog"
        width="500"
        >
          <v-card>
       <DisplayCredits :currentCreditsneeded="currentCreditsneeded" :currentmodule="currentmodule"/>

  
        </v-card>
        </v-dialog>

      </v-col>
     </v-row>
  </v-container>
</main>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {  
    data () {
      return {
        dialog: false,
        currentCreditsneeded: [],
         currentmodule: "IntroductionBonus"
      }
    },
    computed:{
      ...mapActions(["updatePerson"]),
      userDetails (){
          if(this.$store.state.person) {
              return this.$store.state.person
          }
      }
    },
    	methods: {
            AddCredits() {
                this.dialog = true
                // let personData = {...this.$store.state.person};
                // personData.credits = personData.credits + 10;
                // this.$store.commit('setuser/updatePerson', personData)
                // this.$store.commit('SET_PEOPLE', personData)
            },
             greet(event) {
                console.log(event)
            
                // `event` is the native DOM event
                    if (event) {
                        this.dialog = true
                            const myArray = event.split("|");
                            this.currentCreditsneeded = parseInt(myArray[1])
                }
            },
            checkAvailable(id) {
                console.log(this.$store.state.person, id);
                return false
            }
        },
          mounted () {
       window.c_1 = this
    }
}
</script>

<style scoped>
.container {
    position: relative;
     width: 100%;
     height: 0;
     padding-bottom: 56.25%;
 }
 .video {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 105%;
 }
</style>