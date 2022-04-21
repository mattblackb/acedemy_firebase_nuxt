<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
      <v-col cols="4">

    <h1>Episode One</h1>
    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
    <h2>Your Saved Games </h2>
   

        <h3>Episode 1: Part One</h3>
    <div v-for="savedintroduction in dayonenGame" :key="savedintroduction.name">
        <span class="clickable" @click="setIntroduction(savedintroduction)">View game achievements</span> | <a href="/dayoneep2">Continue Game</a>
    </div>

       <h3>Episode 1: Part Two</h3>
    <div v-for="savedintroduction in dayonenGame2" :key="savedintroduction.name">
        <span class="clickable" @click="setIntroduction(savedintroduction)">View game achievements</span>
    </div>

   
    <v-btn @click="$router.push('/auth/signout')">Logout</v-btn>
        
 
      </v-col>
       <v-col cols="8">
          <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction'" :introAchievments="introchosen" />
          <DisplayAceivementsdayone v-if="introchosen.episode == 'dayone'" :introAchievments="introchosen" />
           <DisplayAceivementsdayone v-if="introchosen.episode == 'dayone2'" :introAchievments="introchosen" />
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
      showIntroduction: false
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
 }
</style>