<template>
<main>
     <NavBar />
  <v-container>
     <v-row>
     <v-col cols="12" md="6">
       <DisplayAchievmentsintroduction v-if="introchosen.episode == 'introduction' && showSaved" :introAchievments="introchosen" />
        <img src="/imgs/3.png">
     </v-col>
      <v-col cols="12" md="6">

    <h1>The Academy - Chapter Two</h1>
	
	<h4 class="clickable" > <NuxtLink to="/chapter1Details">< Previous Chapter</NuxtLink> : <NuxtLink to="/chapter3Details">Next Chapter ></NuxtLink></h4>
<br/><br/>

    <p>More possibilities present themselves after your lunch break, where you are already proving popular amongst the students and the staff.<br/>
There are a few puzzles to solve and tasks to perform.<br/><br/>

Jodie, Annie and Maria already want to push your buttons.
<br/><br/>
Be careful though, Principal Valentine could fire you if she catches you crossing any lines!
<br/><br/>
Stay lucky!
<br/><br/>
<b>Chapter Two</b> statistics : 1070 pages : 1195 images : 2 bonus scenes : 50 achievements : 10 bonus achievements
<br />
<b>NOTE:</b> You must successfully complete Chapter One before you can play Chapter Two!
    </p>

    <h2 class="clickable" > <NuxtLink to="/profile">Continue the story from a saved game</NuxtLink></h2>

    <div
            v-for="savedintroduction in dayonenGame2"
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
              >{{ savedintroduction.date }} | View Chapter Two achievements |</span
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
              Play chapter Two</span
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
      dayonenGame2() {
      if (this.$store.state.person) {
        var savedGame = []
        var x = 0
        this.$store.state.person.saved_games.map(function (game, index) {
          if (game.ch2_complete === '1' && !game.ch3_complete) {
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