<template>
   
  <main>
  <!--  <v-app-bar
      color="accent-4"
      dark
    >
   
       <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    <template >
      <v-toolbar-title v-if="userDetails">Welcome: {{userDetails}}</v-toolbar-title>
       <v-toolbar-title v-else>Welcome to the Academy</v-toolbar-title>
    </template>
  
      <v-spacer></v-spacer>
   
     <template v-if="currentUser">
       <v-btn   to="/buy">
            Buy Credits
        </v-btn>
           <v-btn   to="/auth/signout">
            Logout
        </v-btn>
     </template>
   
      
      
      
      <v-btn  to="/introduction">
       Introduction
      </v-btn>
  
      <v-btn icon to="/profile" v-if="userDetails">
        <v-icon>mdi-account</v-icon>
      </v-btn>

     
  
     
       
    </v-app-bar> -->

    <v-container class="hidePrying">
      <v-row><v-toolbar-title v-if="userDetails">Welcome: {{userDetails}}</v-toolbar-title></v-row>
      <v-row class="pt-4 pb-4 ">
        <img src="/imgs/header_new.png" class="textAlignCenter">
      </v-row>
      <v-row>
      <v-col cols=9 >
         <v-btn
      class="ma-2"
      to="/"
    >
      Home
    </v-btn>
        <v-btn
      class="ma-2"
      to="/episodes"
    >
      Episodes
    </v-btn>

       <v-btn
      class="ma-2"
      to="/characters"
    >
      Characters
    </v-btn>
          <v-btn
      class="ma-2"
      to="/about"
    >
      About
    </v-btn>
  </v-col>

      <v-col cols=3>
       <v-btn   to="/buy" v-if="currentUser">
            Buy Credits
        </v-btn>
           <v-btn   to="/auth/signout" v-if="currentUser">
            Logout
        </v-btn>
          <v-btn icon to="/profile" v-if="currentUser">
        <v-icon>mdi-account</v-icon>
      </v-btn>

         <v-btn  to="/auth/signin" v-if="!currentUser" class="ma-2">
        Login
      </v-btn> 
      </v-col>
   
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
.textAlignCenter {
  text-align: center;
  display: block;
  margin: 0 auto;
}
  .hidePrying {
    display: block;
  }
  @media (min-width: 1264px) {
.container {
    max-width: 1500px!important;
}
  }
</style>