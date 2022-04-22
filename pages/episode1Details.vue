<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
     <v-col cols="12" md="6">
  
        <img src="/imgs/2.png">
     </v-col>
      <v-col cols="12" md="6">

    <h1>The Academy - Episode One</h1>

    <p>Descriptive text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis turpis at lorem vehicula, nec fermentum purus euismod. Sed venenatis diam quis ante sollicitudin ullamcorper. Quisque sed est in felis condimentum gravida. Suspendisse ante dui, fermentum nec commodo a, pulvinar sed ante. Quisque porttitor eu augue ac aliquam. Nunc at aliquet elit. 
    
    <br/><br/>Etiam vitae tortor purus. Donec ac lorem in ante volutpat commodo. Morbi egestas, justo in scelerisque congue, eros justo vulputate ipsum, a sollicitudin mi enim ut mi.</p>

    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
         <h2 class="clickable" > <NuxtLink to="/dayone">Play part one of this Episode</NuxtLink></h2>
           <h2 class="clickable" > <NuxtLink to="/dayoneep2">Play part two of this Episode</NuxtLink></h2>
    <h2 class="clickable" v-on:click="showSaved = !showSaved">View your Saved Games </h2>

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