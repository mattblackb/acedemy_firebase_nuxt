<template>
  <div>
    <h3>Chapter {{ convertnumbertoStr(chapter) }} Start Points</h3>
    <!-- These should be the list of previous chapters so for chapter 3 this should be chapter 2 -->
    <span v-for="item in setPrimary" :key="item.id">
      <SavedGameDisplay
        :item="item"
        :chapter="minusOnefromChapter()"
        type="start"
      ></SavedGameDisplay>
    </span>
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
    minusOnefromChapter() {
      //parse this.chapter to integer
      var chapterMinus = parseInt(this.chapter) - 1
      return chapterMinus
    },
    convertnumbertoStr() {
      var chapterPass = this.chapter
      if (this.chapter == 'introduction') {
        chapterPass = '1'
      }
      const retunedNumber = util.convertnumbertoString(chapterPass)
      return retunedNumber
    },
  },
  computed: {
    setPrimary() {
      //get person data from store
      let personData = JSON.parse(JSON.stringify(this.$store.state.person))
      personData = personData.saved_games
      // console.log('personData', personData)
      if (this.chapter != 'introduction') {
        var chapterMinus = parseInt(this.chapter) - 1
      } else {
        var chapterMinus = this.chapter
      }
      var curChapter = this.chapter
      // //filter persondata where the personData.chapterSaved === this.chapter
      // let filteredData = personData.filter(
      //   (item) => item.episode === 'chapter' + chapterMinus + 'saved'
      // )
      //conver integer to string

      var chapterKey = 'ch' + chapterMinus + '_complete'
      var chapterKey2 = 'ch' + curChapter + '_complete'

      var savedGame = []
      var x = 0
      personData.map(function (game, index) {
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
