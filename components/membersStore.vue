<template>
  <div>
    {{ currentItem }} {{ indexProps }} {{ returnCorrectArray(currentItem) }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      stored: [],
    }
  },
  props: {
    currentItem: [],
    indexProps: 0,
  },
  methods: {
    returnCorrectArray(item) {
      //loop arround this.currentItem

      var arr = ''

      Object.values(item).forEach((value) => {
        arr = arr + value
      })
      console.log('arr', arr)
    },
  },
}
</script>
