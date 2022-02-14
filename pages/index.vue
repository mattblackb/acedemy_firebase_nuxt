<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
      <v-col cols="10" lg="5">

    <h1>Welcome to your dashboard</h1>
    <h2 v-if="userDetails" >Available Credits: {{userDetails.credits}}</h2>
    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
    <v-btn @click="$router.push('/auth/signout')">Logout</v-btn>
    <h2>Current Available stories</h2>
  {{stories}}
      </v-col>
     </v-row>
  </v-container>
</main>
</template>

<script>
export default {  
    computed:{
      userDetails (){
          if(this.$store.state.person) {
              return this.$store.state.person
          }
      },
       stories (){
                if(this.$store.state.stories) {
                    return this.$store.state.stories
                }
            }
    }
    
}
</script>
