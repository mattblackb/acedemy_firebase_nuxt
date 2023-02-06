<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
     <v-col cols="12" md="6">
       <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction' && showSaved" :introAchievments="introchosen" />
        <img src="/imgs/14.png">
     </v-col>
      <v-col cols="12" md="6">

    <h1>The Academy - Chapter Six</h1>
	
	<h4 class="clickable" > <NuxtLink to="/chapter5Details">< Previous Chapter</NuxtLink> : <NuxtLink to="/chapter7Details">Next Chapter ></NuxtLink></h4>
<br/><br/>
    <p>Return to The Goodhead Academy on Wednesday afternoon<br/><br/>

It's back to work after what could have been a very eventful morning.
<br/><br/>
You have to make time to forge ahead with work on your report. There is help to be had though, and some of it can be very rewarding
<br/><br/>
Bridgette, Jodie and Didi are all there to help you push in the right direction. You can use your time to develop your relationships with them.
<br/><br/>
It's a busy afternoon but will you find time to help Alicia with her assignment too...?
<br/><br/>
At the end of the day Jodie needs a workout to wind down and Bridgette and Didi want to meet up with you for a drink after work too.
<br/><br/>
Will join Jodie in the gym or go and meet the girls? Maybe you can work out how to meet all their desires...
<br/><br/>
The story can take you in many directions based on the choices you make and the one's you have already made!
<br/><br/>
<b>Chapter Six</b> statistics : 1880 pages : 2570 images : 2 bonus scenes : 35 achievements : 35 bonus achievements
<br />
<b>NOTE:</b> You must successfully complete Chapter Five before you can play Chapter Six!
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
 h2, h2 a { color: white; text-decoration: none; text-transform: uppercase;}
 
 }
 h4, h4 a { color: white; text-decoration: none;}
</style>