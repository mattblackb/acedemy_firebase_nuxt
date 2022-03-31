<template>
   
  <main>
    <v-app-bar
      color="accent-4"
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
       <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    <template >
      <v-toolbar-title v-if="userDetails">Welcome: {{userDetails}}</v-toolbar-title>
       <v-toolbar-title v-else>Welcome to the Academy</v-toolbar-title>
    </template>
  
    
  
     
       
    </v-app-bar>

    <v-container class="hidePrying">
      <v-row>
        <img src="imgs/acedemy_placeholder.jpeg">
      </v-row>
      <v-row>
         <v-btn
      class="ma-2"
      to="/"
    >
      Home
      </v-btn>
      </v-row>
    </v-container>
    </main>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavBar",
 data: () => ({
     currentUser: false
 }),
  methods: {   ...mapActions(["stories/setStories"])},
    mounted() {
       this.$store.dispatch('stories/setStories')
    },
    computed:{
    
      userDetails (){
          if(this.$store.state.person) {
              this.currentUser = true
              return this.$store.state.person.name
          }
      }
      
    }
     
}
</script>

<style>
  .hidePrying {
    display: block;
  }
  @media (min-width: 1264px) {
.container {
    max-width: 1500px!important;
}
  }
</style>