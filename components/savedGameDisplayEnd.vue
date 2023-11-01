<template>
  <!-- <v-row>
    <v-col> -->
  <span
    class="clickable"
    @click="setIntroductionRedirect(item, '/chapter' + chapter + 'saved')"
    >{{ item.date }} | <b>{{ setTextfromtype() }}</b>
  </span>
  <!-- </v-col>
    <v-col>
      <v-tooltip right v-if="item.description">
        <template v-slot:activator="{ on, attrs }">
          <v-icon color="white" dark v-bind="attrs" v-on="on">
            mdi-text-box
          </v-icon>
        </template>
        <span>{{ item.description }} </span>
      </v-tooltip>
    </v-col>
  </v-row> -->
</template>

<script>
export default {
  data() {
    return {
      chapter1: [
        { chapter1: 'chapter1saved' },
        { chapter1scene1_save: 'entrance29.html ' },
      ],
    }
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    chapter: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    //function to turn number to string
    numberToString(num) {
      switch (num) {
        case 0:
          return 'Zero'
        case 1:
          return 'One'
        case 2:
          return 'Two'
        case 3:
          return 'Three'
        case 4:
          return 'Four'
        case 5:
          return 'Five'
        case 6:
          return 'Six'
        case 7:
          return 'Seven'
        case 8:
          return 'Eight'
        case 9:
          return 'Nine'
        default:
          return 'Number out of range'
      }
    },

    setTextfromtype() {
      if (this.type == 'start') {
        var returnVar =
          'View Chapter ' +
          this.numberToString(this.chapter) +
          ' achievements  | Start chapter ' +
          this.numberToString(this.chapter + 1)
        return returnVar + ' from this save'
      }
      if (this.type == 'end') {
        return ' Continue from this save'
      }
      if (this.type == 'partial') {
        return ' Play next Scene'
      }
      return ' Play next Chapter'
    },
    async setIntroductionRedirect(introductionObject, page) {
      this.showloading = true
      this.introchosen = introductionObject
      this.showIntroduction = true

      await this.$store.commit(
        'setCurrentGame/addAchievements',
        introductionObject
      )
      // setTimeout(() => {
      //   this.showloading = false
      this.$router.push(page)
      // }, 3000)

      //  this.showloading = false;
      //       this.$router.push({
      //     path: page
      // })
    },
  },
}
</script>

<style>
.clickable {
  cursor: pointer;
  display: inline-block;
  width: 100%;
}
</style>
