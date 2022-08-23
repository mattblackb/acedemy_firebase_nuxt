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
                  <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/introductionsaved?saved=true')">{{savedintroduction.date}} | View game achievements</span> |  <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/introductionsaved?saved=true')"> Play next Chapter</span>
              </div>
            </v-col>
        </v-row>
  <v-row> 
            <v-col cols="6">
                <a href="/chapter1Details"  ><img src="/imgs/index_ch1.jpg" /></a>
                    <div v-for="savedintroduction in dayonenGame" :key="savedintroduction.name">
                      <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter1saved?saved=true')"> {{savedintroduction.date}} | View game achievements</span> | <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter1saved?saved=true')"> Play next Chapter</span>
                  </div>
            </v-col>
             <v-col cols="6">
                <a href="/chapter2Details"  ><img src="/imgs/index_ch2.jpg" /></a>
                    <div v-for="savedintroduction in dayonenGame2" :key="savedintroduction.name">
             <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter2saved?saved=true')">{{savedintroduction.date}} | View game achievements</span> | <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter2saved?saved=true')"> Play next Chapter</span>
  
    </div>
            </v-col>
                  <v-col cols="6">
                <a href="/chapter3Details"  ><img src="/imgs/index_ch3.jpg" /></a>
                      <div v-for="savedintroduction in dayonenGame3" :key="savedintroduction.name">
             <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter3saved?saved=true')">{{savedintroduction.date}} | View game achievements</span> | <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter3saved?saved=true')"> Play next Chapter</span>
            </div>
            </v-col>
                  <v-col cols="6">
                <a href="/chapter4Details"  ><img src="/imgs/index_ch4.jpg" /></a>

                        <div v-for="chapter4saced in chapter4" :key="chapter4saced.name">
             <span class="clickable" @click="setIntroductionRedirect(chapter4saced, '/chapter4saved?saved=true')">{{chapter4saced.date}} | View game achievements</span> | <span class="clickable" @click="setIntroductionRedirect(chapter4saced, '/chapter4saved?saved=true')"> Play next Chapter</span>

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

<!-- 
    <h3>Introduction</h3>
    <div v-for="savedintroduction in introductionGame" :key="savedintroduction.name">
    
        <span class="clickable" @click="setIntroduction(savedintroduction)">{{savedintroduction.date}} | View game achievements</span> |  <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/introductionsaved')"> Play next Chapter</span>
    </div>
        <h3>Chapter 1</h3>
    <div v-for="savedintroduction in dayonenGame" :key="savedintroduction.name">
        <span class="clickable" @click="setIntroduction(savedintroduction)">{{savedintroduction.date}} | View game achievements</span> | <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter1saved')"> Play next Chapter</span>
    </div>

       <h3>Chapter 2</h3>
       {{dayonenGame2}}
    <div v-for="savedintroduction in dayonenGame2" :key="savedintroduction.name">
             <span class="clickable" @click="setIntroduction(savedintroduction)">{{savedintroduction.date}} | View game achievements</span> | <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter2saved')"> Play next Chapter</span>
  
    </div> -->

   
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
import { mapGetters } from "vuex";
export default {  
  	data() {
		return {
			savedintroductions: [],
      introchosen: {},
      showIntroduction: false,
      showloading: false
		}
	},
  methods: {
      ...mapGetters("setCurrentGame",["addAchievements"]),
      asyncsetState(introductionObject) {
        this.showloading = true;
            return new Promise((resolve) => {
             this.$store.commit('setCurrentGame/addAchievements', introductionObject);
            })
   
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
          console.log(this.$store.state.person.saved_games);
          if(this.$store.state.person) {
              return this.$store.state.person.saved_games.filter(game => game.ch1_complete==="1")
          }
      },
       dayonenGame2 (){
          if(this.$store.state.person) {
              return this.$store.state.person.saved_games.filter(game => game.ch2_complete==="1")
          }
      },
       dayonenGame3 (){
          if(this.$store.state.person) {
              return this.$store.state.person.saved_games.filter(game => game.ch3_complete==="1")
          }
      },
        chapter4 (){
          if(this.$store.state.person) {
              return this.$store.state.person.saved_games.filter(game => game.ch4_complete==="1")
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