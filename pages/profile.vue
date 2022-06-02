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
                  <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/introductionsaved')">{{savedintroduction.date}} | View game achievements</span> |  <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/introductionsaved')"> Play next Chapter</span>
              </div>
            </v-col>
        </v-row>
  <v-row> 
            <v-col cols="6">
                <a href="/chapter1Details"  ><img src="/imgs/index_ch1.jpg" /></a>
                    <div v-for="savedintroduction in dayonenGame" :key="savedintroduction.name">
                      <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter1saved')"> {{savedintroduction.date}} | View game achievements</span> | <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter1saved')"> Play next Chapter</span>
                  </div>
            </v-col>
             <v-col cols="6">
                <a href="/chapter2Details"  ><img src="/imgs/index_ch2.jpg" /></a>
                    <div v-for="savedintroduction in dayonenGame2" :key="savedintroduction.name">
             <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter2saved')">{{savedintroduction.date}} | View game achievements</span> | <span class="clickable" @click="setIntroductionRedirect(savedintroduction, '/chapter2saved')"> Play next Chapter</span>
  
    </div>
            </v-col>
                  <v-col cols="6">
                <a href="/"  ><img src="/imgs/index_ch3_locked.jpg" /></a>
            </v-col>
                  <v-col cols="6">
                <a href="/"  ><img src="/imgs/index_ch4_locked.jpg" /></a>
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
</main>
</template>

<script>
import { mapGetters } from "vuex";
export default {  
  	data() {
		return {
			savedintroductions: [],
      introchosen: {},
      showIntroduction: false
		}
	},
  methods: {
      ...mapGetters("setCurrentGame",["addAchievements"]),
    setIntroduction(introductionObject) {
        this.introchosen = introductionObject;
        this.showIntroduction = true;
         this.$store.commit('setCurrentGame/addAchievements', this.introchosen);
    },
      setIntroductionRedirect(introductionObject, page) {
        this.introchosen = introductionObject;
        this.showIntroduction = true;
         this.$store.commit('setCurrentGame/addAchievements', this.introchosen);
         this.$router.push({
            path: page
        })
    }
  },
    computed:{
         chosenAchievments () {
             console.log('Achievements', this.store)
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
              return this.$store.state.person.saved_games.filter(game => game.episode==="chapter1")
          }
      },
       dayonenGame2 (){
          if(this.$store.state.person) {
              return this.$store.state.person.saved_games.filter(game => game.episode==="chapter1saved")
          }
      }
    }
}
</script>
<style scoped>
 .clickable {
   cursor: pointer;
 }
</style>