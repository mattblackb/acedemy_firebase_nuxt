<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
      <v-col cols="12">

      <h1></h1>
        <div class="container">
            <iframe
            src="../academy_intro/game/checksave_intro.html"
            width="100%"
            height= auto
            style="border: 1px solid #EEE; background: white"
            frameborder="0"
            scrolling="yes"
            class="video"
            ></iframe>
        </div>


    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->

        <v-dialog
        v-model="dialog"
        width="500"
        >
            <v-card>
                    <DisplayCredits :currentCreditsneeded="currentCreditsneeded" :currentmodule="currentmodule"/>
            </v-card>
        </v-dialog>
         <v-dialog
        v-model="dialogSave"
        width="500"
        >
            <v-card>
            <h1>Save Game</h1>
            <SaveGame :cookieJson="cookieJson" />
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
        dialogSave: false,
        cookieJson: '',
        currentCreditsneeded: [],
         currentmodule: "",
            form_dirty: true
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
            },
            Getname() {
                if(this.$store.state.person) {
              return this.$store.state.person
                }
            
            },
              returnAchievements() {
                console.log(this.$store.state.setCurrentGame.chosenAcheivements);
                return this.$store.state.setCurrentGame.chosenAcheivements
            },
             greet(event) {
              
                // `event` is the native DOM event
                    if (event) {
                        this.dialog = true
                            const myArray = event.split("|");
                            this.currentCreditsneeded = parseInt(myArray[1])
                            this.currentmodule = myArray[0]
                }
            },
            
            checkAvailable(id) { //check that the user is logged in (likely)
                if(!this.$store.state.user) {
                    return false
                } else {
                    //Logged in check for available
                    if(this.$store.state.person.available_modules.length > 0){
                        if(this.$store.state.person.available_modules.includes(id)) {
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
            saveProgress(event) { //check that the user is logged in (likely)
                if(!this.$store.state.user.uid) {
                    return false
                } else {
                     if (event) {
                         this.cookieJson = event;
                        this.dialogSave = true
                     }
                }
            },
           beforeWindowUnload (e) {
        
                    if (this.form_dirty) {
                        e.preventDefault()
                        e.returnValue = ''
                    }
            }
            
            
            
        },
        beforeRouteLeave (to, from, next) {
            if (this.form_dirty) {
                next(false)
                window.location = to.path // this is the trick
            } else {
                next()
            }
            },

            beforeDestroy () {
                window.removeEventListener('beforeunload', this.beforeWindowUnload)
            },
    mounted () {
       window.c_1 = this
    },
    created () {
    window.addEventListener('beforeunload', this.beforeWindowUnload)
  }
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