<template>
  <v-app light>
    <v-main>
      {{ BETA_SITE }}

      <nuxt />
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
      BETA_SITE: process.env.BETA_SITE,
    }
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
