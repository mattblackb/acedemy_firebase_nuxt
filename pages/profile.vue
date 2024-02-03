<template>
  <main>
    <NavBar />
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Welcome to your profile {{ userDetails.name }}</h1>
          <h2 v-if="userDetails">
            Available Credits: {{ userDetails.credits }}
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <MainCarousel />
        </v-col>
        <v-col cols="6">
          <ChangeName />
          <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
          <h2>Your saved games are shown on the chapter details pages</h2>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'
export default {
  data() {
    return {
      dialog: false,
      savedintroductions: [],
      introchosen: {},
      showIntroduction: false,
      showloading: false,
      deleteObject: {},
    }
  },
  methods: {
    ...mapActions(['updatePerson']),
    ...mapGetters('setCurrentGame', ['addAchievements']),
    asyncsetState(introductionObject) {
      this.showloading = true
      return new Promise((resolve) => {
        this.$store.commit('setCurrentGame/addAchievements', introductionObject)
      })
    },
  },
  computed: {
    chosenAchievements() {
      return this.$store.state.chosenAchievements
    },
    userDetails() {
      if (this.$store.state.person) {
        return this.$store.state.person
      }
    },
  },
}
</script>
<style scoped>
.clickable {
  cursor: pointer;
}
.loading {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: block;
  background-color: rgba(255, 255, 255, 0.5);
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
