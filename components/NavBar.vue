<template>
  <main>
    <v-dialog v-model="dialog" width="500">
      <v-card class="pa5 modalbackground">
        <v-btn color="primary" text @click="dialog = false"> X </v-btn>
        <h2>Credit payment facility currently disabled</h2>
        <h4>
          Get credits at
          <a href="https://www.patreon.com/dsp3000"
            >https://www.patreon.com/dsp3000</a
          >
        </h4>
      </v-card>
    </v-dialog>

    <v-container class="hidePrying">
      <v-row
        ><v-toolbar-title v-if="userDetails"
          >Welcome: {{ userDetails.name }}</v-toolbar-title
        ></v-row
      >
      <v-row class="pt-4 pb-4">
        <img src="/imgs/header_new.png" class="textAlignCenter" />
      </v-row>
      <v-row>
        <v-toolbar dense elevation="4" flat>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-items>
            <v-btn to="/"> Home </v-btn>
            <v-menu
              open-on-hover
              offset-y
              transition="slide-x-transition"
              bottom
              right
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on"> Chapters </v-btn>
              </template>
              <v-list dense>
                <v-list-item
                  v-for="(item, index) in chapters"
                  :key="index"
                  router
                  :to="item.url"
                >
                  <v-list-item-action>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-btn to="/characters"> Characters </v-btn>
            <v-btn to="/about"> About </v-btn>
            <v-btn v-if="checkEmailForBetaLinks()" to="/admin/pageloader">
              Page Loader
            </v-btn>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-col v-if="userDetails" class="floatL">
              You have <b> {{ userDetails.credits }} </b> credits
            </v-col>
            <v-btn v-if="currentUser" @click="dialog = true">
              Get Credits
            </v-btn>
            <v-btn to="/auth/signout" v-if="currentUser"> Logout </v-btn>
            <v-btn to="/profile" v-if="currentUser" class="primary">
              <v-icon>mdi-account</v-icon>
              Profile
            </v-btn>
            <v-btn to="/auth/signin" v-if="!currentUser" class="ma-2">
              Login
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <!-- <v-col cols="1" sm="1" md="1">
          <v-btn class="ma-2" to="/"> Home </v-btn>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <v-select
            v-model="chosenRoute"
            item-text="name"
            item-value="url"
            label="Chapters"
            :items="chapters"
            variant="solo-filled"
            @change="changeRoute"
          ></v-select>
        </v-col>
        <v-col cols="" sm="2" md="2">
          <v-btn class="ma-2" to="/characters"> Characters </v-btn>
        </v-col>
        <v-col cols="1" sm="1" md="1">
          <v-btn class="ma-2" to="/about"> About </v-btn>
        </v-col>
        
        <v-col cols="12" sm="12" md="3">
          <v-btn v-if="currentUser" @click="dialog = true"> Get Credits </v-btn>
          <v-btn to="/auth/signout" v-if="currentUser"> Logout </v-btn>
          <v-btn icon to="/profile" v-if="currentUser">
            <v-icon>mdi-account</v-icon>
          </v-btn>

          <v-btn to="/auth/signin" v-if="!currentUser" class="ma-2">
            Login
          </v-btn>
        </v-col> -->
      </v-row>
    </v-container>
  </main>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  data: () => ({
    currentUser: false,
    dialog: false,
    chosenRoute: '',
    items: [
      {
        title: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        title: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        title: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
    chapters: [
      { name: 'Introduction', url: '/introductionDetails' },
      { name: 'Chapter 1', url: '/chapter1Details' },
      { name: 'Chapter 2', url: '/chapter2Details' },
      { name: 'Chapter 3', url: '/chapter3Details' },
      { name: 'Chapter 4', url: '/chapter4Details' },
      { name: 'Chapter 5', url: '/chapter5Details' },
      { name: 'Chapter 6', url: '/chapter6Details' },
      { name: 'Chapter 7', url: '/chapter7Details' },
      { name: 'Chapter 8', url: '/chapter8Details' },
      { name: 'Chapter 9', url: '/chapter9Details' },
      { name: 'Chapter 10', url: '/chapter10Details' },
      { name: 'Chapter 11', url: '/chapter11Details' },
      { name: 'Chapter 12', url: '/chapter12Details' },
      { name: 'Chapter 13', url: '/chapter13Details' },
    ],
  }),
  methods: {
    ...mapActions(['stories/setStories']),
    changeRoute(route) {
      this.$router.push({ path: this.chosenRoute })
    },
    checkEmailForBetaLinks() {
      console.log(this.currentUser.email)
      if (
        this.currentUser.email === 'matt@plain.black' ||
        this.currentUser.email === 'dsp3000@gmx.com' ||
        this.currentUser.email === 'jimacep@gmail.com'
      ) {
        return true
      } else {
        return false
      }
    },
  },
  mounted() {
    this.$store.dispatch('stories/setStories')
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
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  background: transparent !important;
  box-shadow: none !important;
}
.v-application--is-ltr .v-toolbar__content > .v-btn.v-btn--icon:first-child {
  display: none !important;
}
.navSelect {
  width: 20%;
  max-width: 300px;
}
.textAlignCenter {
  text-align: center;
  display: block;
  margin: 0 auto;
}
img {
  max-width: 96%;
  padding: 2%;
}
.hidePrying {
  display: block;
}
@media (min-width: 1264px) {
  .container {
    max-width: 1500px !important;
  }
}
.modalbackground {
  background-image: url('/imgs/modals/modal_principal1.jpg');
  background-color: #cccccc;
  min-height: 250px;
}
.modalbackground h2,
.modalbackground p,
.modalbackground h1 {
  max-width: 60%;
  padding: 5%;
  min-width: 60%;
}
.modalbackground h1 {
  text-transform: capitalize;
  line-height: 0px;
}
</style>
