<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
     <v-col cols="12" md="6">
       <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction' && showSaved" :introAchievments="introchosen" />
        <img src="/imgs/15.png">
     </v-col>
      <v-col cols="12" md="6">

    <h1>The Academy - Chapter Seven</h1>
	
	<h4 class="clickable" > <NuxtLink to="/chapter6Details"> < Previous Chapter</NuxtLink> : <NuxtLink to="/chapter8Details">Next Chapter ></NuxtLink></h4>
<br/><br/>
    <p>It's Thursday morning already and there are plans and schemes to figure out<br/><br/>

Miss Goodhead and Governor Ramsey are here to inspect the facilities and pass judgement on everybody's performance.
<br/><br/>
You must choose where your loyalties lie...
<br/><br/>
Do you help Bridgette and Didi bring down the Principal? Does she have any other enemies or allies...?
<br/><br/>
Of course, the day isn't all about cunning plots and schemes, you have a host of other distractions to keep you motivated too!
<br/><br/>
Some of the relationships you have fostered over the past few days can really begin to bear fruit. 
<br/><br/>
<b>Chapter Seven</b> statistics : 1450 pages : 2490 images : 1 bonus scene : 50 achievements : 20 bonus achievements
<br />
<b>NOTE:</b> You must successfully complete Chapter Six before you can play Chapter Seven!
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
 h2, h2 a { color: white; text-decoration: none; text-transform: uppercase;
 
 }
 h4, h4 a { color: white; text-decoration: none;
 
 }
</style>