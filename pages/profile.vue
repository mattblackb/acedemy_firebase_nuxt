<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
      <v-col cols="4">
    <h1>Welcome to your profile {{userDetails.name}}</h1>
    <h2 v-if="userDetails" >Available Credits: {{userDetails.credits}}</h2>
    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
    <h2>Your Saved Games </h2>
    </v-col>
    </v-row>
        <v-row>
            <v-col cols="12">
            <a href="/introductionDetails"  ><img src="/imgs/index_intro.jpg" /></a>
                <div v-for="savedintroduction in introductionGame" :key="savedintroduction.name">
                  <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/introductionsaved?saved=true')">{{savedintroduction.date}} | View game achievements</span> |  <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/introductionsaved?saved=true')"> Play next Chapter </span>
              </div>
            </v-col>
        </v-row>
  <v-row> 
            <v-col cols="6">
                <a href="/chapter1Details"  ><img src="/imgs/index_ch1.jpg" /></a>
                    <div v-for="savedintroduction in dayonenGame" :key="savedintroduction.name">
                      <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter1saved?saved=true')"> {{savedintroduction.date}} | View game achievements</span> | <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter1saved?saved=true')"> Play next Chapter | </span> 
                      <span class="clickable" @click="deleteSave(savedintroduction)">| Delete </span>
                  </div>
            </v-col>
             <v-col cols="6">
                <a href="/chapter2Details"  ><img src="/imgs/index_ch2.jpg" /></a>
                    <div v-for="savedintroduction in dayonenGame2" :key="savedintroduction.name">
             <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter2saved?saved=true')">{{savedintroduction.date}} | View game achievements</span> | <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter2saved?saved=true')"> Play next Chapter</span>
              <span class="clickable" @click="deleteSave(savedintroduction)">| Delete </span>
  
    </div>
            </v-col>
                  <v-col cols="6">
                <a href="/chapter3Details"  ><img src="/imgs/index_ch3.jpg" /></a>
                      <div v-for="savedintroduction in dayonenGame3" :key="savedintroduction.name">
             <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter3saved?saved=true')">{{savedintroduction.date}} | View game achievements</span> | <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter3saved?saved=true')"> Play next Chapter</span>
              <span class="clickable" @click="deleteSave(savedintroduction)">| Delete </span>
            </div>
            </v-col>
                  <v-col cols="6">
                <a href="/chapter4Details"  ><img src="/imgs/index_ch4.jpg" /></a>

                        <div v-for="chapter4saced in chapter4" :key="chapter4saced.name">
             <span class="clickable" @click="setIntroductionRedirect(chapter4saced, '/chapter4saved?saved=true')">{{chapter4saced.date}} | View game achievements</span> | <span class="clickable" @click="setIntroductionRedirect(chapter4saced, '/chapter4saved?saved=true')"> Play next Chapter</span>
              <span class="clickable" @click="deleteSave(chapter4saced)">| Delete {</span>

            </div>
            </v-col>
                  <v-col cols="6">
                <a href="/"  ><img src="/imgs/index_ch5_locked.jpg" /></a>
            </v-col>
                  <v-col cols="6">
                <a href="/"  ><img src="/imgs/index_ch6_locked.jpg" /></a>
            </v-col>
                  <v-col cols="6">
                <a href="/"  ><img src="/imgs/index_ch7_locked.jpg" /></a>
            </v-col>
                  <v-col cols="6">
                <a href="/"  ><img src="/imgs/index_ch8_locked.jpg" /></a>
            </v-col>
                  <v-col cols="6">
                <a href="/"  ><img src="/imgs/index_ch9_locked.jpg" /></a>
            </v-col>
                  <v-col cols="6">
                <a href="/"  ><img src="/imgs/index_ch10_locked.jpg" /></a>
            </v-col>
        </v-row>

 <v-dialog
        v-model="dialog"
        width="500"
        >
            <v-card class="pa5 modalbackground">
                       <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
           X
          </v-btn>
                   <h3>Delete this save?</h3>
                                <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
           No
          </v-btn>
                    <v-btn
            color="warning"
            text
            @click="commitDelete()"
          >
           Yes
          </v-btn>

            </v-card>
        </v-dialog>
       

   
    <v-btn @click="$router.push('/auth/signout')">Logout</v-btn>
        
 
    <!-- <v-row>
       <v-col cols="8">
          <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction'" :introAchievments="introchosen" />
          <DisplayAceivementsdayone v-if="introchosen.episode == 'chapter1'" :introAchievments="introchosen" />
          <DisplayAceivementsdayone v-if="introchosen.episode == 'chapter2'" :introAchievments="introchosen" />
        </v-col>
     </v-row> -->
  </v-container>
  <div v-if="showloading" class="loading">
      <img src="/VAyR.gif" />
  </div>
</main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import _ from "lodash";
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
     ...mapActions(["updatePerson"]),
      ...mapGetters("setCurrentGame",["addAchievements"]),
      asyncsetState(introductionObject) {
        this.showloading = true;
            return new Promise((resolve) => {
             this.$store.commit('setCurrentGame/addAchievements', introductionObject);
            })
   
      },
      commitDelete() {
        this.$store.commit('setuser/updatePerson', this.deleteObject);
        this.$store.commit('SET_PEOPLE',  this.deleteObject);
        this.dialog = false;
      },
      deleteSave(introductionObject) {
         var orderAllData = _.cloneDeep(this.$store.state.person);
        this.dialog = true;
         //remove from aray at index 
         
         orderAllData.saved_games.splice(parseInt(introductionObject.index),1);
          this.deleteObject = orderAllData;
          console.log('DeleteObject',this.deleteObject);

      },
    setIntroduction(introductionObject) {
        this.introchosen = introductionObject;
        this.showIntroduction = true;
         this.$store.commit('setCurrentGame/addAchievements', this.introchosen);
    },
     async setIntroductionRedirect(introductionObject, page) {
         this.showloading = true;
        this.introchosen = introductionObject;
        this.showIntroduction = true;
      
           await this.$store.commit('setCurrentGame/addAchievements', introductionObject);
           setTimeout(() => {  this.showloading = false;
            this.$router.push(page); }, 3000);
            
           
          //  this.showloading = false;
        //       this.$router.push({
        //     path: page
        // })
          

       
    }
  },
    computed:{
         chosenAchievments () {
      return this.$store.state.chosenAcheivements
    },
      userDetails (){
          if(this.$store.state.person) {
              return this.$store.state.person;
          }
      },
      introductionGame (){
 
          if(this.$store.state.person) {
              return this.$store.state.person.saved_games.filter(game => game.episode==="introduction")
          }
      },
       dayonenGame (){
          if(this.$store.state.person) {
            var savedGame = []; var x=0;
             this.$store.state.person.saved_games.map(function(game, index) {
    
                 if(game.ch1_complete==="1"  && !game.ch2_complete) {
                     savedGame.push(_.cloneDeep(game));
                      savedGame[x].index = index;
                     x++;
                 }
              });
              return savedGame;

          }
      },
       dayonenGame2 (){
          if(this.$store.state.person) {
            var savedGame = []; var x=0;
             this.$store.state.person.saved_games.map(function(game, index) {
              
                 if(game.ch2_complete==="1" && !game.ch3_complete) {
                  console.log('game2',game.ch3_complete, index);
                     savedGame.push(_.cloneDeep(game));
                      savedGame[x].index = index;
                     x++;
                 }
              });
              return savedGame;

          }
      },
       dayonenGame3 (){
          if(this.$store.state.person) {
            var savedGame = []; var x=0;
             this.$store.state.person.saved_games.map(function(game, index) {
       
                 if(game.ch3_complete==="1"  && !game.ch4_complete) {
                   console.log('game3',game.ch3_complete, index);
                     savedGame.push(_.cloneDeep(game));
                      savedGame[x].index = index;
                     x++;
                 }
              });
              return savedGame;

          }
      },
        chapter4 (){
          if(this.$store.state.person) {
            var savedGame = []; var x=0;
             this.$store.state.person.saved_games.map(function(game, index) {
    
                 if(game.ch4_complete==="1") {
                        savedGame.push(_.cloneDeep(game));
                      savedGame[x].index = index;
                     x++;
                 }
              });
              return savedGame;

          }
      }
    }
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
  background-color: rgba(255,255,255,0.5);
  top: 0px;
  left: 0px;
      display: flex;
    align-items: center;
    justify-content: center;
 }
</style>