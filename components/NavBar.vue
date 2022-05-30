<template>
   
  <main>
       <v-dialog
        v-model="dialog"
        width="500"
        >
            <v-card class="pa5 modalbackground">
                               <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
           X
          </v-btn>
                    <h2>Credit payment facility currently disabled</h2>
     
            </v-card>
        </v-dialog>
 

    <v-container class="hidePrying">
      <v-row><v-toolbar-title v-if="userDetails">Welcome: {{userDetails}}</v-toolbar-title></v-row>
      <v-row class="pt-4 pb-4 ">
        <img src="/imgs/header_new.png" class="textAlignCenter">
      </v-row>
      <v-row>
      <v-col cols="12"  sm="12"
        md="9" >
         <v-btn
      class="ma-2"
      to="/"
    >
      Home
    </v-btn>
        <v-btn
      class="ma-2"
      to="/chapters"
    >
      Chapters
    </v-btn>

       <v-btn
      class="ma-2"
      to="/characters"
    >
      Characters
    </v-btn>
          <v-btn
      class="ma-2"
      to="/about"
    >
      About
    </v-btn>
  </v-col>

      <v-col cols="12"  sm="12"
        md="3">
       <v-btn    v-if="currentUser"  @click="dialog = true">
            Buy Credits
        </v-btn>
           <v-btn   to="/auth/signout" v-if="currentUser">
            Logout
        </v-btn>
          <v-btn icon to="/profile" v-if="currentUser">
        <v-icon>mdi-account</v-icon>
      </v-btn>

         <v-btn  to="/auth/signin" v-if="!currentUser" class="ma-2">
        Login
      </v-btn> 
      </v-col>
   
      </v-row>
    </v-container>
    </main>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavBar",
 data: () => ({
     currentUser: false,
     dialog: false
 }),
  methods: {   ...mapActions(["stories/setStories"])},
    mounted() {
       this.$store.dispatch('stories/setStories')
    },
    computed:{
    
      userDetails (){
          if(this.$store.state.person) {
              this.currentUser = true
              return this.$store.state.person.name
          }
      }
      
    }
     
}
</script>

<style>
.textAlignCenter {
  text-align: center;
  display: block;
  margin: 0 auto;
}
img {max-width: 96%; padding: 2%;}
  .hidePrying {
    display: block;
  }
  @media (min-width: 1264px) {
.container {
    max-width: 1500px!important;
}
  }
  .modalbackground{
    background-image: url("/imgs/modal_principal1.jpg");
 background-color: #cccccc;
 min-height: 250px;

  }
    .modalbackground h2{
      max-width: 60%;
      padding: 5%;
    }
</style>