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
   
    <h3>Introduction</h3>
    <div v-for="savedintroduction in introductionGame" :key="savedintroduction.name">
        <span class="clickable" @click="setIntroduction(savedintroduction)">View game achievements</span> | Play Game
    </div>

    <v-btn @click="$router.push('/auth/signout')">Logout</v-btn>
        
 
      </v-col>
       <v-col cols="8">
          <DisplayAchievmentsintroduction v-if="showIntroduction" :introAchievments="introchosen" />
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
      console.log(introductionObject);
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
              return this.$store.state.person.saved_games.filter(game => game.episode="introduction")
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