<template>
  <div>
    <h3>Chapter {{ convertnumbertoStr() }} scene saves</h3>
    <!-- These should be the list of previous chapters so for chapter 3 this should be chapter 2 -->

    <div v-for="item in setHeader" :key="item.id">
      <h5>{{ item }}</h5>
      <div v-for="sGame in getSplitScenes(item)" :key="sGame.id">
        {{ sGame }}
        <SavedGameDisplayPartial
          :item="sGame"
          :chapter="minusOnefromChapter()"
          type="partial"
        ></SavedGameDisplayPartial>
      </div>
    </div>

    <!-- <p v-for="item in setPrimary" :key="item.id">
      <pre>
        {{ item }}
      </pre> 
      {{ setHeader }}

      <SavedGameDisplay :item="item" :chapter="chapter"></SavedGameDisplay>
    </p> -->
  </div>
</template>

<script>
import util from '~/assets/js/utils'
export default {
  data() {
    return {
      filteredItems: [],
      filteredHeaders: [],
    }
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
    minusOnefromChapter() {
      //parse this.chapter to integer
      var chapterMinus = parseInt(this.chapter) - 1
      return chapterMinus
    },
    convertnumbertoStr() {
      const retunedNumber = util.convertnumbertoString(this.chapter)
      return retunedNumber
    },
    setSave(newChapter) {
      // alert('newChapter', newChapter)
    },
    getSplitScenes(scenenumber) {
      //remove str 'Scene ' from scenenumber
      scenenumber = scenenumber.replace('Scene ', '')
      var stringtoFilter = 'scene' + scenenumber
      let filteredItems = this.filteredItems.filter((item) =>
        item.episode.includes(stringtoFilter)
      )
      // console.log('filteredItems', this.filteredItems)
      // console.log('this.stringtoFilter', stringtoFilter)
      // console.log('this.scenenumber', scenenumber)
      return filteredItems
    },
    setPrimary() {
      //get person data from store
      let personData = JSON.parse(JSON.stringify(this.$store.state.person))
      personData = personData.saved_games
      // console.log('personData', personData)
      let filteredData = personData.filter((item) =>
        item.episode.includes('chapter' + this.chapter)
      )
      // console.log('Filtered Data1', filteredData, 'chapters', this.chapter)
      //filter persondata where the personData.chapterSaved === this.chapter
      filteredData = filteredData.filter(
        (item) => item.chapterSaved != 'chapter' + this.chapter + 'saved'
      )

      //order the filtered data by the key chapterSaved
      filteredData.sort((a, b) => {
        return a.episode.localeCompare(b.episode)
      })
      this.filteredItems = filteredData
      return filteredData
    },
  },
  computed: {
    setHeader() {
      const filteredItems = this.setPrimary()
      // console.log('Filtered Data', this.filteredItems)
      //get unique items in array by key chapterSaved
      let unique = [...new Set(filteredItems.map((item) => item.episode))]
      //foreach items in uniqu array push to filteredHeaders
      let filtewredHeaders = []
      unique.forEach((item, index) => {
        var str = item
        //get each integer in the string str

        //get the second number in the string str
        var scene = str.replace(/[^0-9]/g, '').slice(-1)
        filtewredHeaders.push('Scene ' + scene)
      })

      return filtewredHeaders
    },
  },
}
</script>
