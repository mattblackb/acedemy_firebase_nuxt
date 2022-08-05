<template>
<main>
     <NavBar />
      <v-container v-if="!userDetails">
        <img src="/imgs/main_page_image.png" style="width:100%">
      </v-container>
  <v-container v-if="userDetails">
     <v-row>
      <v-col cols="12" md="6">
            <h2 >About The Academy</h2><p>
 <br/><br/>

            <b>The Academy</b> is a multi-episode series of adult interactive games created by dsp3000. Each part is designed to be played one after the other with achievements carrying over from one chapter into the next.

 <br/><br/>
 The game is designed to have multiple story paths and multiple possibilities and achievements to discover. The more you play the more you can find.
  <br/><br/>
  The story is split up into chapters, with checkpoints along the way. By creating a free user account, you can save your progress at these checkpoints, play chapters again to see what else you can find, or continue to the next part. There are also many bonus scenes that can only be unlocked by spending credits.
  <br/><br/>
  <h2>The story</h2>
You are a consultant hired for the week to assess what needs to happen in the Media Department to ensure a prosperous future at the Goodhead Academy. <br/><br/>
Head of department Bridgette is there to help you out and at the end of the week you'll be expected to report your findings to Principal Valentine.<br/><br/>
Along the way you get to meet the rest of the staff and student body. Everyone wants to get to know you while you are there, some of them will help you and some of them will be a welcome or perhaps unwelcome distraction.<br/><br/>
It's easy to get tempted from the work you have to do and that can of course be lots of fun. All you must to do is avoid getting fired!


 <br/><br/>
However you choose to play you can be sure to have fun along the way.
 </p>
 <img :src="selectedImage">
      </v-col>
      <v-col cols="12" md="6">

    <h1>Welcome {{userDetails.name}}</h1>
    <h2 v-if="userDetails" >Available Credits: {{userDetails.credits}}</h2>
    <h2>Currently Available Episodes</h2>
     	<a href="/introductionDetails"  ><img src="/imgs/index_intro.jpg" /></a>
        <a href="/chapter1Details"  ><img src="/imgs/index_ch1.jpg" /></a>
        <a href="/chapter2Details"  ><img src="/imgs/index_ch2.jpg" /></a>
        <a href="/chapter3Details"  ><img src="/imgs/index_ch3.jpg" /></a>
		<a href="/chapter4Details"  ><img src="/imgs/index_ch4.jpg" /></a>
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
                'imgs/4.png', 'imgs/1.png', 'imgs/2.png', 'imgs/3.png', 'imgs/5.png', 'imgs/6.png', 'imgs/7.png', 'imgs/8.png', 'imgs/9.png', 'imgs/10.png', 'imgs/11.png', 'imgs/12.png', 'imgs/13.png'
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