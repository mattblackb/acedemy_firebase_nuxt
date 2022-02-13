<template>
    <div>
        <h1>Navbar</h1>
        <v-btn v-if="this.$fire.auth.currentUser" to="/auth/signout">
            Logout
        </v-btn>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "NavBar",
  methods: {  ...mapActions(["fetchPeople"])},
    mounted() {
	//this.$auth.persistState();
    if(this.$fire.auth.currentUser) {
    this.fetchPeople(this.$fire.auth.currentUser.email);
        alert('People!')
    }
    },
}
</script>