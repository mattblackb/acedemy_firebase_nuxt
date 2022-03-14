<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
      <v-col cols="10" lg="5">

    <h1>Welcome to your dashboard</h1>
    <h2 v-if="userDetails" >Available Credits: {{userDetails.credits}}</h2>
 <h2>Current Available stories</h2>
    <ul>
        <li>Introduction - View the tutorial on how this site works <a href="/introduction">View episode</a></li>
        <template v-if="userDetails">
        <li>Day One - View the tutorial on how this site works <a href="/dayone"  >View episode</a></li>
        </template>
           <template v-else>
        <li>Day One - View the tutorial on how this site works <a href="/auth/signin"  >Login</a></li>
        </template>
        
    </ul>

    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
 
    <template v-if="userDetails">
        <h2>Current Available bonuses</h2>
        <div  v-for="eachModule in userDetails.available_modules"  :key="eachModule">
        <ul v-html="checkforAvailableBonus(eachModule)"></ul>
        </div>
    </template>

    <template v-if="userDetails">
       <v-btn @click="$router.push('/auth/signout')">Logout</v-btn>
    </template>
      </v-col>
     </v-row>
  </v-container>
</main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {  
     data() {
		return {
            stories: null,
            user: null,
            availablemodules: null,
            currentUser: false
		}
	},
 
    methods: {
        checkforAvailableBonus(eachModule) {
            if(this.stories){
                //Got to be a more efficient way of doing this>?
                const returnedStory = { ...this.stories.stories};
                const storyArray = Object.entries(returnedStory);
                  const filteredReturn = storyArray.filter(story => story[1].id == eachModule);
                  if(filteredReturn[0]) { 
                   return '<li>'+filteredReturn[0][1].name+' | <a href="/'+filteredReturn[0][1].location+'">Play episode</a></li>'
                  } else {
                       return '<li>No available bonusus</li>'
                  }
            }

        },
      
       setStories (){
                 let storiesData = this.$store.state;
                 this.stories = storiesData.stories;
              
            }
    },
    computed:{
    userDetails (){
          if(this.$store.state.person) {
              this.currentUser = true;
              return this.$store.state.person;
          }
      }
    },
   async mounted() {
       await this.setStories();
       console.log('Stories',this.stories);
    }
    
}
</script>
