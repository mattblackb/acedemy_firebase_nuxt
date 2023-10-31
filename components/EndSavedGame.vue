<template>
  <div>
    <h3>Completed Chapter {{ convertnumbertoStr(chapter) }} saves</h3>
    <!-- These should be the list of previous chapters so for chapter 3 this should be chapter 2 -->

    <div v-for="item in setPrimary" :key="item.id">
      <SavedGameDisplay
        :item="item"
        :chapter="chapter"
        type="end"
      ></SavedGameDisplay>
    </div>
  </div>
</template>

<script>
import util from '~/assets/js/utils'
import _ from 'lodash'
export default {
  data() {
    return {}
  },
  props: {
    chapter: {
      type: String,
      required: true,
    },
  },
  watch: {
    chapter(newValue) {
      //   console.log('cookieJson changed to: ', newValue, 'route', this.route)
      this.setSave(newValue)
    },
  },
  methods: {
    setSave(newChapter) {
      alert('newChapter', newChapter)
    },
    convertnumbertoStr() {
      const retunedNumber = util.convertnumbertoString(this.chapter)
      return retunedNumber
    },

    async setIntroductionRedirect(introductionObject, page) {
      //parse json introductionObject
      console.log('introductionObject', introductionObject.gameDetails)
      let gameDetails = JSON.parse(JSON.parse(introductionObject.gameDetails))
      console.log('introductionObject', gameDetails)
      await this.$store.commit('setCurrentGame/addAchievements', gameDetails)

      this.$router.push(page)

      //  this.showloading = false;
      //       this.$router.push({
      //     path: page
      // })
    },
  },
  computed: {
    setPrimary() {
      //get person data from store
      let personData = JSON.parse(JSON.stringify(this.$store.state.person))
      personData = personData.saved_games
      // console.log('personData', personData)
      if (this.chapter != 'introduction') {
        var chapterMinus = parseInt(this.chapter) + 1
      } else {
        var chapterMinus = this.chapter
      }
      var curChapter = this.chapter
      // //filter persondata where the personData.chapterSaved === this.chapter
      // let filteredData = personData.filter(
      //   (item) => item.episode === 'chapter' + chapterMinus + 'saved'
      // )
      //conver integer to string

      var chapterKey = 'ch' + curChapter + '_complete'
      var chapterKey2 = 'ch' + chapterMinus + '_complete'

      var savedGame = []
      var x = 0
      personData.map(function (game, index) {
        console.log(
          ' game[chapterKey]',
          game[chapterKey],
          chapterKey,
          chapterKey2
        )
        if (
          game[chapterKey] === '1' &&
          game[chapterKey2] != 0 &&
          !game[chapterKey2]
        ) {
          savedGame.push(_.cloneDeep(game))
          savedGame[x].index = index
          x++
        }
      })
      console.log('savedGame', savedGame)
      return savedGame

      // console.log(
      //   'Filtered Data',
      //   filteredData,
      //   'chapters',
      //   this.chapter,
      //   chapterMinus
      // )
      // return filteredData
    },
  },
}
</script>
