<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
     <v-col cols="12" md="6">
       <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction' && showSaved" :introAchievments="introchosen" />
        <img src="/imgs/20.png">
     </v-col>
      <v-col cols="12" md="6">

    <h1>The Academy - Chapter Eight</h1>

    <p>Thursday afternoon could be the last few hours you have at the Goodhead Academy<br/><br/>

It all depends on how things go for Principal Valentine...
<br/><br/>
Will she come undone after everything you have found out about her and what's been happening?
<br/><br/>
You have some time to fill before your important meeting later on in the afternoon.
<br/><br/>
While everybody is busy thrashing out the what happens next, you can focus on the here and now.
<br/><br/>
<b>Chapter Eight</b> statistics : 2090 pages : 3335 images : 4 bonus scenes : 35 achievements : 45 bonus achievements
<br />
<b>NOTE:</b> You must successfully complete Chapter Seven before you can play Chapter Eight!
    </p>

    <h2 class="clickable" > <NuxtLink to="/profile">Continue the story from a saved game</NuxtLink></h2>


 
      </v-col>
     
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