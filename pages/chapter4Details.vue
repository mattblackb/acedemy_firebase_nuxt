<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
     <v-col cols="12" md="6">
       <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction' && showSaved" :introAchievments="introchosen" />
        <img src="/imgs/6.png">
     </v-col>
      <v-col cols="12" md="6">

    <h1>The Academy - Chapter Four</h1>
	
	<h4 class="clickable" > <NuxtLink to="/chapter3Details">< Previous Chapter</NuxtLink> : <NuxtLink to="/chapter5Details">Next Chapter ></NuxtLink></h4>
<br/><br/>

    <p>Come back for a full schedule of activities on Tuesday Afternoon...<br/><br/>

Perhaps Amy, Laura and Lola will invite you to join them for their afternoon workout in the gym and maybe Holly will want to hook up later too.
<br/><br/>
If you showed Annie the attention she craves then she might just return the favour in the photography studio.
<br/><br/>
Of course Principal Valentine needs to be kept abreast of your progress. She has some rather interesting techniques to keep you motivated.
<br/><br/>
And at the end of the day Jodie might want to pick up where you left off as well.
<br/><br/>
There is plenty to juggle with whichever pathway you choose in this chapter.
<br/><br/>
<b>Chapter Four</b> statistics : 1780 pages : 3050 images : 4 bonus scene : 40 achievements : 50 bonus achievements
<br />
<b>NOTE:</b> You must successfully complete Chapter Three before you can play Chapter Four!
    </p>

    <h2 class="clickable" > <NuxtLink to="/profile">Continue the story from a saved game</NuxtLink></h2>
    <div
            v-for="savedintroduction in dayonenGame3"
            :key="savedintroduction.name"
          >
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  savedintroduction,
                  '/chapter4saved?saved=true'
                )
              "
              >{{ savedintroduction.date }} | View Chapter Four achievements |</span
            >
  
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  savedintroduction,
                  '/chapter4saved?saved=true'
                )
              "
            >
              Play chapter Four</span
            >
            <!-- <span class="clickable" @click="deleteSave(savedintroduction)"
              >| Delete
            </span> -->
          </div>

 
      </v-col>
     
     </v-row>
  </v-container>
</main>
</template>

<script>
import { mapGetters } from "vuex";
import _ from 'lodash'
export default {  
  	data() {
		return {
			savedintroductions: [],
            introchosen: {},
            showIntroduction: false,
            showSaved: false
		}
	},
  methods: {
    setIntroduction(introductionObject) {
        this.introchosen = introductionObject;
        this.showIntroduction = true;
    },
    async setIntroductionRedirect(introductionObject, page) {
      this.showloading = true
      this.introchosen = introductionObject
      this.showIntroduction = true

      await this.$store.commit(
        'setCurrentGame/addAchievements',
        introductionObject
      )
     
        this.$router.push(page)
    
    },
   
          randomItem () {
      return this.images[Math.floor(Math.random()*this.images.length)];
    }
  },
    computed:{
      dayonenGame3() {
  
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if(game.ch4_complete==="1" && !game.ch5_complete) {
      
            savedGame.push(_.cloneDeep(game))
            savedGame[x].index = index
            x++
          }
        })
        return savedGame
      }
    },
      userDetails (){
          if(this.$store.state.person) {
              return this.$store.state.person;
          }
      },
      introductionGame (){
          if(this.$store.state.person) {
              return this.$store.state.person.saved_games.filter(game => game.episode==="introduction")
          }
      },
         dayonenGame (){
          if(this.$store.state.person) {
              return this.$store.state.person.saved_games.filter(game => game.episode==="dayone")
          }
      },
       dayonenGame2 (){
          if(this.$store.state.person) {
              return this.$store.state.person.saved_games.filter(game => game.episode==="dayone2")
          }
      }
    }
}
</script>
<style scoped>
 .clickable {
   cursor: pointer;
 }
 h2, h2 a { color: white; text-decoration: none; text-transform: uppercase;}
 
 h4, h4 a { color: white; text-decoration: none;}
</style>