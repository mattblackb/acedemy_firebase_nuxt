<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
      <v-col cols="12" md="6">
            <h2 >About this site</h2><p><b>The Academy</b> is a multi episode series of interactive erotic games created by dsp3000. Each part is designed to be played one after the other with achievements carrying over from one part into the next.</p><strong>The Academy</strong> is a multi episode series of interactive erotic games created by dsp3000.<br> Each part is designed to be played one after the other with achievements carrying over from one part into the next.<br><br><strong>Episode One</strong> was released in April 2016 : <em>1230 pages</em><br><strong>Episode Two</strong> was released in July 2016 : <em>1851 pages</em><br><strong>Episode Three</strong> was released in December 2016 : <em>2264 pages</em><br><strong>Episode Four</strong> was released in May 2017 : <em>2226 pages</em><br><strong>Episode Five</strong> was released in December 2017 : <em>967 pages</em><br><strong>Episode Six</strong> was released in January 2018 : <em>1666 pages</em><br><strong>Episode Seven</strong> was released in March 2019 : <em>2667 pages</em><br><strong>Episode Eight</strong> was released in October 2019 : <em>1762 pages</em><br><strong>Episode Nine</strong> Completed mid 2020 - yet to be released : <em>3002 pages</em><br><strong>Episode Ten</strong> Almost completed mid 2021 - yet to be released : <em>2700 plus pages</em><br><strong>Episode Eleven</strong> In early stages of production.<br></v-col>
      <v-col cols="12" md="6">

    <h1>Welcome {{userDetails.name}}</h1>
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
     <v-row>
         <v-col cols="12" class="hidePrying">
                 <img src="imgs/bg1.png">
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
