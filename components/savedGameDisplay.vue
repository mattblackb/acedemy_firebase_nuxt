<template>
  <v-row>
    <v-col>
      <span
        class="clickable"
        @click="setIntroductionRedirect(item, '/chapter' + chapter + 'saved')"
        >{{ item.date }} |{{ setTextfromtype() }}
      </span>
    </v-col>
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
  </v-row>
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
    setTextfromtype() {
      if (this.type == 'start') {
        return ' Continue from this save'
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
      let gameDetails = JSON.parse(introductionObject.gameDetails)
      await this.$store.commit('setCurrentGame/addAchievements', gameDetails)
      this.$router.push(page)
      this.$router.push({
        path: page,
        query: { chapter: introductionObject.chapterSaved },
      })
    },
  },
}
</script>

<style>
.clickable {
  cursor: pointer;
}
</style>
