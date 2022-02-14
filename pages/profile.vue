<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
      <v-col cols="10">

    <h1>Welcome to your profile {{userDetails.name}}</h1>
    <h2 v-if="userDetails" >Available Credits: {{userDetails.credits}}</h2>
    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
    <v-btn @click="$router.push('/auth/signout')">Logout</v-btn>

      </v-col>
     </v-row>
  </v-container>
</main>
</template>

<script>
import { mapGetters } from "vuex";
export default {  
  	
    computed:{
      userDetails (){
          if(this.$store.state.person) {
              return this.$store.state.person
          }
      }
    }
}
</script>
