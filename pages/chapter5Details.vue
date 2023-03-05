<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
     <v-col cols="12" md="6">
       <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction' && showSaved" :introAchievments="introchosen" />
        <img src="/imgs/1.png">
     </v-col>
      <v-col cols="12" md="6">

    <h1>The Academy - Chapter Five</h1>
	
	<h4 class="clickable" > <NuxtLink to="/chapter4Details">< Previous Chapter</NuxtLink> : <NuxtLink to="/chapter6Details">Next Chapter ></NuxtLink></h4>
<br/><br/>
    <p>Another day of adventures at the Academy<br/><br/>

It's all business first thing with another staff meeting where you find out more about the Principal's expectations.
<br/><br/>
Then back to work with a whole host of distractions to keep you on your toes or entertained depending on how you look at it.
<br/><br/>
Principal Valentine gives you a special mission over your lunch break.
<br/><br/>
Will you take the opportunity to hang out with Annie, or will you help Holly and Amy with their photography project...?
<br/><br/>
Once again, there are several pathways for you choose in this chapter.
<br/><br/>
<b>Chapter Five</b> statistics : 1500 pages : 1700 images : 2 bonus scenes : 25 achievements : 30 bonus achievements
<br />
<b>NOTE:</b> You must successfully complete Chapter Four before you can play Chapter Five!
    </p>

    <h2 class="clickable" > <NuxtLink to="/profile">Continue the story from a saved game</NuxtLink></h2>

    <div
            v-for="savedintroduction in dayonenGame5"
            :key="savedintroduction.name"
          >
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  savedintroduction,
                  '/chapter5saved?saved=true'
                )
              "
              >{{ savedintroduction.date }} | View Chapter Five achievements |</span
            >
  
            <span
              class="clickable"
              @click="
                setIntroductionRedirect(
                  savedintroduction,
                  '/chapter5saved?saved=true'
                )
              "
            >
              Play chapter Five</span
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
    setIntroduction(introductionObject) {
        this.introchosen = introductionObject;
        this.showIntroduction = true;
    },
          randomItem () {
      return this.images[Math.floor(Math.random()*this.images.length)];
    }
  },
    computed:{
      dayonenGame5() {
  
  if (this.$store.state.person) {
    var savedGame = []
    var x = 0
    this.$store.state.person.saved_games.map(function (game, index) {
      if(game.ch4_complete==="1" && game.ch5_complete != 0) {
  
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