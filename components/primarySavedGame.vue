<template>
  <div>
    <h3>Chapter {{ convertnumbertoStr(chapter) }} Start</h3>
    <!-- These should be the list of previous chapters so for chapter 3 this should be chapter 2 -->
    <p v-for="item in setPrimary" :key="item.id">
      <SavedGameDisplay
        :item="item"
        :chapter="chapter"
        type="start"
      ></SavedGameDisplay>
    </p>
  </div>
</template>

<script>
import util from '~/assets/js/utils'
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
      console.log('personData', personData)
      if (this.chapter != 'introduction') {
        var chapterMinus = parseInt(this.chapter) - 1
      } else {
        var chapterMinus = this.chapter
      }
      //filter persondata where the personData.chapterSaved === this.chapter
      let filteredData = personData.filter(
        (item) => item.episode === 'chapter' + chapterMinus + 'saved'
      )
      console.log('Filtered Data', filteredData, 'chapters', this.chapter)
      return filteredData
    },
  },
}
</script>
