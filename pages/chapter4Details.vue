<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
     <v-col cols="12" md="6">
       <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction' && showSaved" :introAchievments="introchosen" />
        <img src="/imgs/4.png">
     </v-col>
      <v-col cols="12" md="6">

    <h1>The Academy - Chapter Four</h1>

    <p>Come back for a full schedule of activities on Tuesday Afternoon...<br/><br/>

Perhaps Amy, Laura and Lola will invite you to join them for their afternoon workout in the gym and maybe Holly will want to hook up later too.
<br/><br/>
If you showed Annie the attention she craves then she might just return the favour in the photography studio.
<br/><br/>
Of course Principal Valentine needs to be kept abreast of your progress. She has some rather interesting techniques to keep you motivated.
<br/><br/>
And at the end of the day Jodie might want to pick up where you left off as well.
<br/><br/>
There is plenty to juggle with whichever pathway you choose in this chapter.
<br/><br/>
<b>Chapter Four</b> statistics : 1780 pages : 3050 images : 4 bonus scene : 40 achievements : 50 bonus achievements
<br />
<b>NOTE:</b> You must successfully complete Chapter Three before you can play Chapter Four!
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