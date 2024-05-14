<template>
  <v-app light>
    <v-main>
      <!-- if the current route is signin or signout, then do not display the main page -->

      {{ isBetaUser() }}
      <div v-if="isSigninOrSignoutRoute()">
        <nuxt />
      </div>
      <div v-else-if="checkEmailForBetaLinks()">
        <nuxt />
      </div>
      <div v-else>
        <v-container>
          <v-row>
            <h2>This site is for beta testers only..</h2>
            <nuxt-link to="/auth/signin">Sign in</nuxt-link>
            <nuxt-link to="/auth/signout">Sign out</nuxt-link>
          </v-row>
        </v-container>
      </div>
      <p class="pa-5">
        Become a supporter at :
        <a href="https://www.patreon.com/dsp3000" target="_blank"
          >https://www.patreon.com/dsp3000</a
        >
      </p>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      currentUser: null,
    }
  },
  methods: {
    isBetaUser() {
      return process.env.BETA_SITE !== undefined
    },
    checkEmailForBetaLinks() {
      if (!this.userDetails) return false
      if (
        this.userDetails.email === 'matt@plain.black' ||
        this.userDetails.email === 'dsp3000@gmx.com'
      ) {
        return true
      } else {
        return false
      }
    },
    isSigninOrSignoutRoute() {
      return (
        this.$route.path === '/auth/signin' ||
        this.$route.path === '/auth/signout'
      )
    },
    // other methods...
  },
  computed: {
    userDetails() {
      if (this.$store.state.person) {
        this.currentUser = this.$store.state.person
        return this.$store.state.person
      }
    },
  },
}
</script>

<style>
.theme--light.v-application {
  background: rgb(255, 203, 203) !important;
  background: linear-gradient(
    177deg,
    rgba(255, 203, 203, 1) 0%,
    rgba(255, 50, 75, 1) 100%
  ) !important;
}
</style>
