<template>
  <div>
    <!-- These should be the list of previous chapters so for chapter 3 this should be chapter 2 -->
    <PrimarySavedGame :chapter="setChapterforIntroduction" />

    <!-- These should be the list of previous chapters so for cghapter 3 this should be chapter 2 -->
    <PartialSavedGames :chapter="chapter" />
    <!-- These should be the end saves - so for chapter 3 this should ber chapter 3 saves -->
    <EndSavedGame :chapter="chapter" />
  </div>
</template>

<script>
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
  },
  computed: {
    setChapterforIntroduction() {
      console.log('newChapter', this.chapter)
      if (this.chapter == '1') {
        return 'introduction'
      }
      return this.chapter
    },
  },
}
</script>
