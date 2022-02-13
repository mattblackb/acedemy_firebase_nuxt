<template>
  <div class="flex flex-column align-start align-self-start justify-start">
      
    <h1>Welcome to your dashboard</h1>
    <h2>vailable Credits: {{getPeople}}</h2>
    <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p>
    <v-btn @click="$router.push('/auth/signout')">Logout</v-btn>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  	computed: mapGetters(["getPeople"]),
}
</script>
