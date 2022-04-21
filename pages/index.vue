<template>
<main>
     <NavBar />
  <v-container v-if="userDetails">
     <v-row>
      <v-col cols="12" md="6">
            <h2 >About this site</h2><p><b>The Academy</b> is a multi episode series of interactive erotic games created by dsp3000. Each part is designed to be played one after the other with achievements carrying over from one part into the next.</p>
             <img :src="selectedImage">
      </v-col>
      <v-col cols="12" md="6">

    <h1>Welcome {{userDetails.name}}</h1>
    <h2 v-if="userDetails" >Available Credits: {{userDetails.credits}}</h2>
    <h2>Current Available stories</h2>
     <a href="/introductionDetails"  ><img src="/imgs/index_intro1.png" /></a>
        <a href="/episode1Details"  ><img src="/imgs/index_ep1pt1_locked.jpeg" /></a>
        <!-- <ul>
            <li>Introduction - View the tutorial on how this site works <a href="/introduction">View episode</a></li>
            <template v-if="userDetails">
        
            </template>
            <template v-else>
            <li>Day One - View the tutorial on how this site works <a href="/auth/signin"  >Login</a></li>
            </template>
            
        </ul> -->

    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
 

      </v-col>
     </v-row>
     <v-row>
         <v-col cols="12" class="hidePrying">
                
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
            currentUser: false,
            selectedImage: 'imgs/4.png',
            images: [
                'imgs/4.png', 'imgs/1.png', 'imgs/2.png', 'imgs/3.png', 'imgs/5.png', 'imgs/6.png'
            ]
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
              
            },
            randomItem () {
      return this.images[Math.floor(Math.random()*this.images.length)];
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
    },
    created() {
   this.selectedImage = this.randomItem(this.images)
}
    
}
</script>
<style scoped>
img {max-width: 100%;}
</style>