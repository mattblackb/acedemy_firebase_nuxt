<template>
  <main>
    <v-container>
      <NavBar />
      <v-row>
        <v-col cols="12">
          <h1>Page Loader</h1>
          <v-select
            label="Select"
            :items="chapters"
            item-title="name"
            item-value="location"
            item-text="name"
            v-model="selectBonus"
          ></v-select>
          <v-text-field label="URL" v-model="chosenUrl"> Default </v-text-field>
          <v-btn @click="setSrc()">Set</v-btn>
          {{ combinedURL }}
          <iframe
            :key="'jotform-iframe-' + selectBonus"
            :src="combinedURL"
            width="100%"
            height="900px"
            style="border: 1px solid #eee; background: white"
            frameborder="0"
            scrolling="yes"
            class="video"
          ></iframe>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      curUrl: '',
      selectBonus: 'Select Chapter',
      chosenUrl: 'Enter page URL.html',
      combinedURL: '',
      chapters: [
        {
          name: 'Introduction',
          location: 'introduction',
        },
        {
          name: 'Chapter 1',
          location: 'chapter1',
        },
        {
          name: 'Chapter 2',
          location: 'chapter2',
        },
        {
          name: 'Chapter 3',
          location: 'chapter3',
        },
        {
          name: 'Chapter 4',
          location: 'chapter4',
        },
        {
          name: 'Chapter 5',
          location: 'chapter5',
        },
        {
          name: 'Chapter 6',
          location: 'chapter6',
        },
        {
          name: 'Chapter 7',
          location: 'chapter7',
        },
        {
          name: 'Chapter 8',
          location: 'chapter8',
        },
        {
          name: 'Chapter 9',
          location: 'chapter9',
        },
        {
          name: 'Chapter 10',
          location: 'chapter10',
        },
        {
          name: 'Chapter 11',
          location: 'chapter11',
        },
        {
          name: 'Chapter 12',
          location: 'chapter12',
        },
        {
          name: 'Chapter 13',
          location: 'chapter13',
        },
        {
          name: 'Chapter 14',
          location: 'chapter14',
        },
        {
          name: 'Chapter 15',
          location: 'chapter15',
        },
        {
          name: 'Chapter 16',
          location: 'chapter16',
        },
      ],
    }
  },
  methods: {
    setSrc() {
      this.combinedURL = `../${this.selectBonus}/game/${this.chosenUrl}`
    },

    checkAvailable(id) {
      //check that the user is logged in (likely)
      if (!this.$store.state.user.uid) {
        return false
      } else {
        //Logged in check for available
        if (this.$store.state.person.available_modules.length > 0) {
          if (this.$store.state.person.available_modules.includes(id)) {
            //user has already bought the module change the button on the iframe src
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      }
    },
    greet(event) {
      // `event` is the native DOM event
      if (event) {
        this.dialog = true
        const myArray = event.split('|')
        this.currentCreditsneeded = parseInt(myArray[1])
        this.currentmodule = myArray[0]
      }
    },
  },
  mounted() {
    window.c_1 = this
  },
}
</script>
