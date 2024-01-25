<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card class="pa5 modalbackground">
        <v-btn color="primary" text @click="dialog = false"> X </v-btn>
        <h3>Delete this save?</h3>
        <v-btn color="primary" depressed @click="dialog = false"> No </v-btn>
        <v-btn color="warning" depressed @click="commitDelete()"> Yes </v-btn>
      </v-card>
    </v-dialog>
    <!-- <v-row>
    <v-col> -->

    <v-dialog v-model="dialogDescription" width="500">
      <v-card class="pa5 modalbackground">
        <v-btn color="primary" text @click="dialogObject = false"> X </v-btn>
        <h3>Add Description</h3>
        <v-textarea
          v-model="description"
          label="Description"
          hint="Add a description to this save"
          persistent-hint
          counter="150"
          rows="1"
          auto-grow
          max-height="200"
        >
        </v-textarea>
        <v-btn color="primary" depressed @click="dialogObject = false">
          Cancel
        </v-btn>
        <v-btn color="warning" depressed @click="commitDescription()">
          Save
        </v-btn>
      </v-card>
    </v-dialog>

    <span
      class="clickable savedGamelink"
      @click="setIntroductionRedirect(item, '/chapter' + chapter + 'saved')"
      >{{ item.date }} | <b>{{ setTextfromtype() }}</b>

      <v-tooltip right v-if="item.description">
        <template v-slot:activator="{ on, attrs }">
          <v-icon color="white" dark v-bind="attrs" v-on="on">
            mdi-text-box
          </v-icon>
        </template>
        <span>{{ item.description }} </span>
      </v-tooltip>
    </span>
    <span class="clear">
      <span class="clickable delete" @click="deleteSave(item)"> Delete </span>
      <span class="clickable addDec" @click="addDescription(item)">
        Add Description
      </span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogDescription: false,
      description: '',
      descriptionIndex: 0,
      dialog: false,
      deleteObject: {},
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
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    commitDelete() {
      this.$store.commit('setuser/updatePerson', this.deleteObject)
      this.$store.commit('SET_PEOPLE', this.deleteObject)
      this.dialog = false
    },
    addDescription(orderData) {
      if (this.item.description) {
        this.description = this.item.description
      }
      this.dialogDescription = true
      this.descriptionIndex = orderData.index
    },
    commitDescription() {
      var orderAllData = _.cloneDeep(this.$store.state.person)

      orderAllData.saved_games[
        this.descriptionIndex
      ].description = this.description
      this.deleteObject = orderAllData
      this.$store.commit('setuser/updatePerson', this.deleteObject)
      this.$store.commit('SET_PEOPLE', this.deleteObject)
      this.dialogDescription = false
    },
    deleteSave(introductionObject) {
      var orderAllData = _.cloneDeep(this.$store.state.person)
      this.dialog = true
      //remove from aray at index
      orderAllData.saved_games.splice(parseInt(introductionObject.index), 1)
      this.deleteObject = orderAllData
    },
    //function to turn number to string
    numberToString(num, step) {
      //make sure num is an Integer
      if (isNaN(num)) {
        if (step == 1) {
          return 'Intro'
        } else {
          return 'One'
        }
      }
      num = parseInt(num)
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
        case 10:
          return 'Ten'
        case 11:
          return 'Eleven'
        case 12:
          return 'Twelve'
        case 13:
          return 'Thirteen'
        case 14:
          return 'Fourteen'
        case 15:
          return 'Fifteen'
        case 16:
          return 'Sixteen'
        default:
          return 'Number out of range'
      }
    },

    setTextfromtype() {
      if (this.type == 'start') {
        var returnVar =
          'View Chapter ' +
          this.numberToString(this.chapter, 1) +
          ' achievements  | Start Chapter ' +
          this.numberToString(this.chapter + 1, 2)
        return returnVar + ' from this save'
      }
      if (this.type == 'end') {
        var returnVar =
          'View Chapter ' +
          this.numberToString(this.chapter, 1) +
          ' achievements  | Start Chapter ' +
          this.numberToString(this.chapter + 1, 2)
        return returnVar + ' from this save'
      }
      if (this.type == 'partial') {
        return ' Play next Scene'
      }
      return ' Play next Chapter'
    },
    async setIntroductionRedirect(introductionObject, page) {
      if (page == '/chapterNaNsaved') {
        page = '/chapter1saved'
      }
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
.savedGamelink {
  cursor: pointer;
  display: block;
  float: left;
  clear: both;
}
.delete {
  float: right;
  background-color: rgba(229, 23, 23, 0.4);
  color: white;
  margin-top: 1px;
  padding: 1px 5px;
}
.addDec {
  float: right;
  background-color: rgba(68, 229, 23, 0.4);
  color: white;
  margin-top: 1px;
  padding: 1px 5px;
}
.clear {
  clear: both;
  width: 100%;
  display: inline-block;
}
</style>
