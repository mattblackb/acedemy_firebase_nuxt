<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
      <v-col cols="10" lg="5">
        
       <v-card flat outlined>
        <v-tabs v-model="tab" active-class="white" height="40" background-color="grey lighten-2" fixed-tabs hide-slider>
         <v-tab>Returning user?</v-tab>
         <v-tab>New user?</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
         <v-tab-item :value="0">
          <v-card-text>
           <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field prepend-icon="mdi-email" validate-on-blur clearable dense outlined v-model="auth.email" :rules="[rules.emailRequired, ...rules.email]" label="Please enter your Email" type="email" required/>
            <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.passwordRequired]" :type="show1 ? 'text' : 'password'" counter @click:append="show1 = !show1" prepend-icon="mdi-lock" dense outlined v-model="auth.password" label="Please enter your password"
             required />
            <v-row align="center">
             <v-btn
            class="login-button ma-3"
            @click="login"
            depressed
            large
            >Login</v-btn>
             <a @click="forgotPassword" class="subtitle-2">Forgot your password?</a>
            </v-row>
           </v-form>
          </v-card-text>
         </v-tab-item>
         <v-tab-item :value="1">
          <v-card-text>
           <v-text-field dense outlined label="Your Name" v-model="firstName" :rules="[rules.nameRequired]" type="text" />
      
           <v-text-field dense outlined label="Email" type="email" v-model="email" />
           <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[...rules.passwordRequired]" :type="show1 ? 'text' : 'password'" counter @click:append="show1 = !show1" prepend-icon="mdi-lock" dense outlined v-model="password" label="Please enter your password"
            required />
           <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[...rules.passwordMatch]" :type="show1 ? 'text' : 'password'" counter @click:append="show1 = !show1" prepend-icon="mdi-lock" dense outlined v-model="newPassword" label="Please enter your password"
            required />
           <v-row align="center" justify="space-around">
            <v-btn dark depressed @click="createUser">Create Account</v-btn>
           </v-row>
          </v-card-text>
         </v-tab-item>
        </v-tabs-items>
       </v-card>
      </v-col>
   
     </v-row>
     <v-snackbar
        :timeout="4000"
        v-model="snackbar"
        absolute
        top
        center
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-container>
</main>
</template>

<script>
export default {
  data() {

    
    return {
      snackbar: false,
      snackbarText: 'No error message',
      auth: {
        email: '',
        password: ''
      },
      tab: 0,
  email: null,
  firstName: null,
  lastName: null,
  password: null,
  snackbar: false,
  newPassword: null,
  show1: false,
  valid: false,
  rules: {
   email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Your Email should look like user@email.com";
   },
   emailRequired: value => !!value || "You must enter your Email",
  nameRequired: value => !!value || "You must enter your Name",
   passwordRequired: value => !!value || "Your password is required",
   passwordMatch: value => value === this.password || "Your passwords don't match",
  //  min: v => v.length >= 14 ||  "Your password must be at least 14 characters",
   emailMatch: () => "The email and password you entered don't match"
    }
    }
  },
  methods: {
    login() {
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(that.auth.email, that.auth.password)
      .catch(function (error){
        that.snackbarText = error.message
        that.snackbar = true
      }).then((user) => {
        //we are signed in
        $nuxt.$router.push('/')
      })
    },
    forgotPassword() {
      let that = this
      this.$fire.auth.sendPasswordResetEmail(this.auth.email)
      .then(function (){
        that.snackbarText = 'reset link sent to ' + that.auth.email
        that.snackbar = true
      })
      .catch(function (error) {
        if(!that.auth.email){
            that.snackbarText = "Please enter your email address in the form above"
        } else {
            that.snackbarText = error.message
        }
        that.snackbar = true
      })
    },
   createUser() {
     let that = this
     this.$fire.auth.createUserWithEmailAndPassword(
          that.email,
          that.password
        )
      .then(() => {
        
        that.snackbarText = 'User created' + that.auth.email
        that.snackbar = true
        that.populateData(that.auth.email)
      })
      .catch(function (error) {
        that.snackbarText = error.message
        that.snackbar = true
      })
    },
    async populateData() {


    const placeRef = this.$fire.firestore.collection('People')
      .where("email", "==", this.email)
      .get()
      .then((querySnapshot) => {
        console.log('query',querySnapshot)
      
          //create a blank document for profile
          var docData= 	{ name: this.firstName, email: this.email, credits: 0, available_modules: [], saved_games: [] }
	        this.$fire.firestore.collection('People').doc().set(docData);
           $nuxt.$router.push('/')
        
      })
  

    }
  }



  }

</script>

<style>

</style>