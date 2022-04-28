<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
     <v-col cols="12" md="6">
       <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction' && showSaved" :introAchievments="introchosen" />
        <img src="/imgs/1.png">
     </v-col>
      <v-col cols="12" md="6">

    <h1>The Academy - Episode Two</h1>

    <p>If you survived your first day at the Academy you can move on to a whole new day the next.<br/>
    Meet some more of the characters, work on your report and solve a few more problems.<br/>
    You also get a chance to really get to know more about the students by working with them in the photography studio. Who knows where that will lead…
    <br/><br/>You might get time for a workout with Amy, Laura and Lola in the gym during the afternoon of perhaps you'll choose to help Holly with a special project.<br/>
    Principal Valentine also needs a progress update and a motivational chat.</br/></br/>
    Day two can reveal many of the Academy's dirty little secrets if you know where to look.</br/></br/>
    And Jodie is there for you too…</br/></br/>

    <b>Episode Two - Part One</b> statistics : 866 pages : 786 images : 1 bonus scene<br/>
<b>Episode Two - Part Two</b>statistics : 1990 pages : 3039 images : 3 bonus scenes
    </p>

    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
         <h2 class="clickable" > <NuxtLink to="/dayoneep2">Play part one of this Episode</NuxtLink></h2>
           <h2 class="clickable" > <NuxtLink to="/dayoneep2">Play part two of this Episode</NuxtLink></h2>
    <h2 class="clickable" v-on:click="showSaved = !showSaved">View your Saved Games </h2>

    <div v-if="showSaved">
    <div v-for="savedintroduction in introductionGame" :key="savedintroduction.name">
        <span class="clickable" @click="setIntroduction(savedintroduction)">View game achievements</span> | <a href="/introduction">Replay Game</a> 
    </div>
    </div>


 
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
 }
 h2, h2 a { color: white; text-decoration: none; text-transform: uppercase}
</style>