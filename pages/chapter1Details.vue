<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
     <v-col cols="12" md="6">
  
        <img src="/imgs/2.png">
     </v-col>
      <v-col cols="12" md="6">

    <h1>The Academy - Chapter 1</h1>

    <p>Start your new job at <i>The Goodhead Academy</i> on Monday morning where you are introduced to many of the characters you will spend your week with. There are also a few essential problems to solve and some tasks that need completing before you can successfully move on to the afternoon.
<br/><br/>
Get to know Bridgette, Didi, Jodie and Principal Valentine a little more and get yourself familiar with most of the students.
<br/><br/>
Good luck!
<br/><br/>
<b>Chapter One</b> statistics : 530 pages : 525 images : 1 bonus scene</p>
    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
         <h2 class="clickable" > <NuxtLink to="/chapter1">Start playing the game</NuxtLink></h2>
           
    <h2 class="clickable" > <NuxtLink to="/profile">View your Saved Games</NuxtLink></h2>

    <div v-if="showSaved">
    <div v-for="savedintroduction in dayonenGame" :key="savedintroduction.name">
        <span class="clickable" @click="setIntroduction(savedintroduction)">View game achievements</span> | <a href="/introduction">Replay Game</a> 
    </div>
    </div>

   <DisplayAceivementsdayone v-if="introchosen.episode == 'dayone' && showSaved" :introAchievments="introchosen" class="pt-5"/>


 
 
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
    },
          randomItem () {
      return this.images[Math.floor(Math.random()*this.images.length)];
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
 h2, h2 a, a { color: white; text-decoration: none; text-transform: uppercase}
</style>