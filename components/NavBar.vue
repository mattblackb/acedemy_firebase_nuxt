<template>
   

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
       <v-toolbar-title v-else>Welcome to the Acedamy</v-toolbar-title>
    </template>
  
      <v-spacer></v-spacer>
   
     <!-- <template v-if="getUser().email">
           <v-btn   to="/auth/signout">
            Logout
        </v-btn>
     </template>
       <template v-else>
        <v-btn  >
                    Loginå
        </v-btn>
       </template> -->
      
      
      
      <v-btn  to="/introduction">
       Introduction
      </v-btn>
  
      <v-btn icon to="/profile" v-if="userDetails">
        <v-icon>mdi-account</v-icon>
      </v-btn>

         <v-btn icon to="/auth/signin" v-else class="mr-3">
        Login
      </v-btn> 
  
     
       
    </v-app-bar>
</template>
<script>
import {  mapActions } from "vuex";
export default {
  name: "NavBar",
 data: () => ({
     currentUser: null
 }),
  methods: {   ...mapActions(["stories/setStories"])},
    mounted() {
      //  if(!this.$store.state.stories) {
       this.$store.dispatch('stories/setStories')
      //  }
    },
    computed:{
    
      userDetails (){
          if(this.$store.state.person) {
              return this.$store.state.person.name
          }
      }
      
    }
     
}
</script>
