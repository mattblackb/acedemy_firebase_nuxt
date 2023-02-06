<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
     <v-col cols="12" md="6">
        <img src="/imgs/5.png">
     </v-col>
      <v-col cols="12" md="6">

    <h1>The Academy - Introduction</h1>

   <h4 class="clickable" > <NuxtLink to="/chapter1Details">Next Chapter ></NuxtLink></h4>
<br/><br/>

You start the story when you wake up in a hotel room with a former acquaintance. Natalia explains all about how the game works and offers an opportunity to test your skills and have some fun with her before you both have to leave for work.
<br/><br/>
You must play through this episode before you can move on to the next one.
<br/><br/>
<b>Introduction statistics</b> : 180 pages : 478 images : 1 bonus scene
<br/><br/>

    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
         <h2 class="clickable" > <NuxtLink to="/introduction">Play the Introduction</NuxtLink></h2>
    
	<h2 class="clickable" > <NuxtLink to="/profile">View your Saved Games</NuxtLink></h2>

    <div v-if="showSaved">
    <div v-for="savedintroduction in introductionGame" :key="savedintroduction.name">
                <span class="clickable" @click="setIntroduction(savedintroduction)">{{savedintroduction.date}} | View game achievements</span> | <a href="/introduction">Replay Game</a> 
    </div>
    </div>
           <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction' && showSaved" :introAchievments="introchosen" class="pt-5"/>


 
      </v-col>
      <!-- <v-col cols="8">
          <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction'" :introAchievments="introchosen" />
          <DisplayAceivementsdayone v-if="introchosen.episode == 'dayone'" :introAchievments="introchosen" />
           <DisplayAceivementsdayone v-if="introchosen.episode == 'dayone2'" :introAchievments="introchosen" />
        </v-col> -->
     </v-row>
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
            showIntroduction: false,
            showSaved: false
		}
	},
  methods: {
    setIntroduction(introductionObject) {
        this.introchosen = introductionObject;
        this.showIntroduction = true;
    }
  },
    computed:{
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
              return this.$store.state.person.saved_games.filter(game => game.episode==="dayone")
          }
      },
       dayonenGame2 (){
          if(this.$store.state.person) {
              return this.$store.state.person.saved_games.filter(game => game.episode==="dayone2")
          }
      }
    }
}
</script>
<style scoped>
 .clickable {
   cursor: pointer;
   color: white;
 }
 h2, h2 a, a { color: white; text-decoration: none; text-transform: uppercase;}
 
 }
 h4, h4 a { color: white; text-decoration: none;}
</style>