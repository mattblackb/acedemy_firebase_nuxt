<template>
  
</template>

<script>
export default {
  asyncData() {
    $nuxt.$fire.auth.signOut()
    this.$store.commit('setuser/clearPeople')
  }
}
</script>

<style>

</style>