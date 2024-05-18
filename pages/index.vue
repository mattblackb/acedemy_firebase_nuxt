<template>
  <main>
    <NavBar />
    <v-container v-if="!userDetails">
      <img src="/imgs/main_page_image.png" style="width: 100%" />
    </v-container>
    <v-container v-if="userDetails">
      <v-row>
        <v-col cols="12" md="6">
          <h2>About The Academy</h2>
          <p>
            <br /><br />

            <b>The Academy</b> is a multi-episode series of adult interactive
            games created by dsp3000. Each part is designed to be played one
            after the other with achievements carrying over from one chapter
            into the next.

            <br /><br />
            The game is designed to have multiple story paths and multiple
            possibilities and achievements to discover. The more you play the
            more you can find.
            <br /><br />
            The story is split up into chapters, with checkpoints along the way.
            By creating a free user account, you can save your progress at these
            checkpoints, play chapters again to see what else you can find, or
            continue to the next part. There are also many bonus scenes that can
            only be unlocked by spending credits.
          </p>
          <br /><br />
          <h2>The story</h2>
          <p>
            You are a consultant hired for the week to assess what needs to
            happen in the Media Department to ensure a prosperous future at the
            Goodhead Academy. <br /><br />
            Head of department Bridgette is there to help you out and at the end
            of the week you'll be expected to report your findings to Principal
            Valentine.<br /><br />
            Along the way you get to meet the rest of the staff and student
            body. Everyone wants to get to know you while you are there, some of
            them will help you and some of them will be a welcome or perhaps
            unwelcome distraction.<br /><br />
            It's easy to get tempted away from the work you have to do and that
            can of course be lots of fun. All you really must to do is avoid
            getting fired before your report is due!<br /><br />
            There are several puzzles and mysteries to unravel during your time
            at the Academy, many of them go much deeper than the simple task you
            were originally hired for.<br />
            Maybe you will be celebrating your success by Thursday evening...<br />
            There will always be consequences at the end of the week though...
            <br /><br />
            However you choose to play you can be sure to have fun along the
            way.
          </p>
          <MainCarousel />
        </v-col>
        <v-col cols="12" md="6">
          <h1>Welcome {{ userDetails.name }}</h1>
          <h2 v-if="userDetails">
            Available Credits: {{ userDetails.credits }}
          </h2>
          <h2>Currently Available Episodes</h2>
          <a href="/introductionDetails"><img src="/imgs/index_intro.jpg" /></a>
          <a href="/chapter1Details"><img src="/imgs/index_ch1.jpg" /></a>
          <a href="/chapter2Details"><img src="/imgs/index_ch2.jpg" /></a>
          <a href="/chapter3Details"><img src="/imgs/index_ch3.jpg" /></a>
          <a href="/chapter4Details"><img src="/imgs/index_ch4.jpg" /></a>
          <a href="/chapter5Details"><img src="/imgs/index_ch5.jpg" /></a>
          <a href="/chapter6Details"><img src="/imgs/index_ch6.jpg" /></a>
          <a href="/chapter7Details"><img src="/imgs/index_ch7.jpg" /></a>
          <a href="/chapter8Details"><img src="/imgs/index_ch8.jpg" /></a>
          <a href="/chapter9Details"><img src="/imgs/index_ch9.jpg" /></a>
          <a href="/chapter10Details"><img src="/imgs/index_ch10.jpg" /></a>
          <a href="/chapter11Details"><img src="/imgs/index_ch11.jpg" /></a>
          <a href="/chapter12Details"><img src="/imgs/index_ch12.jpg" /></a>
          <a href="/chapter13Details"><img src="/imgs/index_ch13.jpg" /></a>
		  <a href="/chapter14Details"><img src="/imgs/index_ch14.jpg" /></a>
		  <a href="/chapter15Details"><img src="/imgs/index_ch15.jpg" /></a>
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
        <v-col cols="12" class="hidePrying"> </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      stories: null,
      user: null,
      availablemodules: null,
      currentUser: false,
      selectedImage: 'imgs/4.png',
      images: [
        'imgs/1.png',
        'imgs/2.png',
        'imgs/3.png',
        'imgs/4.png',
        'imgs/5.png',
        'imgs/6.png',
        'imgs/7.png',
        'imgs/8.png',
        'imgs/9.png',
        'imgs/10.png',
        'imgs/11.png',
        'imgs/12.png',
        'imgs/13.png',
        'imgs/14.png',
        'imgs/15.png',
        'imgs/16.png',
        'imgs/17.png',
        'imgs/18.png',
        'imgs/19.png',
        'imgs/20.png',
        'imgs/21.png',
        'imgs/22.png',
        'imgs/23.png',
        'imgs/24.png',
        'imgs/25.png',
        'imgs/26.png',
        'imgs/27.png',
        'imgs/28.png',
        'imgs/29.png',
        'imgs/30.png',
        'imgs/31.png',
        'imgs/32.png',
        'imgs/33.png',
        'imgs/34.png',
        'imgs/35.png',
        'imgs/36.png',
        'imgs/37.png',
        'imgs/38.png',
		'imgs/39.png',
        'imgs/40.png',
		'imgs/41.png',
      ],
    }
  },

  methods: {
    checkforAvailableBonus(eachModule) {
      if (this.stories) {
        //Got to be a more efficient way of doing this>?
        const returnedStory = { ...this.stories.stories }
        const storyArray = Object.entries(returnedStory)
        const filteredReturn = storyArray.filter(
          (story) => story[1].id == eachModule
        )
        if (filteredReturn[0]) {
          return (
            '<li>' +
            filteredReturn[0][1].name +
            ' | <a href="/' +
            filteredReturn[0][1].location +
            '">Play episode</a></li>'
          )
        } else {
          return '<li>No available bonuses</li>'
        }
      }
    },

    setStories() {
      let storiesData = this.$store.state
      this.stories = storiesData.stories
    },
    randomItem() {
      return this.images[Math.floor(Math.random() * this.images.length)]
    },
  },
  computed: {
    userDetails() {
      if (this.$store.state.person) {
        this.currentUser = true
        return this.$store.state.person
      }
    },
  },
  async mounted() {
    await this.setStories()
    console.log('Stories', this.stories)
  },
  created() {
    this.selectedImage = this.randomItem(this.images)
  },
}
</script>
<style scoped>
img {
  max-width: 100%;
}
</style>
