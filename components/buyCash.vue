<template>
  <v-conainer>
    <v-row class="pa-1">
      <!-- <div class="alert alert-danger" role="alert">
      <p>Credits needed: {{ currentCreditsneeded }}</p>
    </div> -->
      <!-- <p>Purchase credits?</p> -->
      <!-- <button type="button" class="btn btn-primary">Buy Credits</button> -->
      <!-- <div ref="paypal"></div> -->
      <h3 class="ml-5">{{ currentMessage }}</h3>
      <p>You are about to buy {{ currentCreditsneeded }} cash</p>
    </v-row>
    <v-row class="pa-1">
      <v-btn
        type="button"
        class="btn btn-primary ml-5"
        v-on:click="buyModule"
        v-if="thisBuy"
      >
        Buy cash with {{ currentCreditsneeded }} Credits
      </v-btn>
      <!-- </div> -->
      <!-- <div v-else>
      <p>
        <b>{{ selectedStory.name }}</b>
      </p>
      <p>{{ selectedStory.description }}</p>
      <button type="button" class="btn btn-primary" v-on:click="buyModule">
        Buy access with {{ selectedStory.cost }} Credits
      </button>
    </div> -->
    </v-row>
  </v-conainer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentBuy: this.$route.params.id,
      selectedStory: {},
      currentStatus: false,
      currentMessage: 'You do not have enough credits.',
      storyId: '',
      thisBuy: true,
    }
  },
  //watch currentCreditsneeded
  watch: {
    currentCreditsneeded: function () {
      this.checkAvailable()
    },
  },
  props: {
    currentCreditsneeded: {
      type: String,
      required: true,
    },
    currentmodule: {
      type: String,
      required: true,
    },
    changeURL: {
      type: Function,
      required: true,
    },
  },
  methods: {
    ...mapGetters('stories', ['getStories']),
    setLoaded: function () {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            console.log('Creating order..', this.order)
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '10',
                  },
                },
              ],
            })
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture()
            if (order.status) {
              if (order.purchase_units[0].amount.value === '10.00') {
                let personData = { ...this.$store.state.person }
                personData.credits = personData.credits + 100
                this.$store.commit('setuser/updatePerson', personData)
                this.$store.commit('SET_PEOPLE', personData)
                this.currentStatus = true
              }
            }
            // ajax request
          },
          onError: (err) => {
            console.log(err)
          },
        })
        .render(this.$refs.paypal)
    },
    checkAvailable() {
      if (this.$store.state.person) {
        let personData = this.$store.state.person
        let storiesData = this.$store.getters['stories/getStories']
        //LOOP all stories - get applicable story
        storiesData.map((story) => {
          if (story.id == this.currentmodule) {
            // console.log('Story', story.id, this.currentmodule);
            this.selectedStory = story
          }
        })

        if (personData.credits >= this.currentCreditsneeded) {
          this.currentStatus = true
          this.currentMessage = 'You have enough credits to buy cash'
          this.thisBuy = true
        } else {
          this.currentMessage = 'You do not have enough credits.'
          this.thisBuy = false
        }
        //Check that user hasn't already bought
        personData.available_modules.map((module) => {
          if (module === this.currentmodule) {
            this.currentMessage = 'You already have access to this bonus scene'
            // this.currentStatus = false;
          }
        })
      }
    },

    buyModule() {
      //set Cash cookie to current value plus this.currentCreditsneeded
      console.log('Change URL', this.changeURL)
      const name = 'cash='
      const cDecoded = decodeURIComponent(document.cookie) //to be careful
      const cArr = cDecoded.split('; ')
      let res
      cArr.forEach((val) => {
        if (val.indexOf(name) === 0) res = val.substring(name.length)
      })
      //check that res has a value
      if (!res) {
        res = 0
      }
      //parse res value as number
      let cash = parseInt(res)
      //add currentCreditsneeded to cash
      //parse this.currentCreditsneeded as number
      let credits = parseInt(this.currentCreditsneeded)
      cash = cash + credits

      //set cash cookie to cash
      document.cookie =
        'cash=' + cash + '; expires=Thu, 18 Dec 2029 12:00:00 UTC; path=/'

      let personData = { ...this.$store.state.person }

      personData.credits = personData.credits - credits
      //check this isn't a negative number
      if (personData.credits < 0) {
        if (this.currentmodule === 'chapter11') {
          this.changeURL('../chapter11/game/cashmachine9.html')
        } else if (this.currentmodule === 'chapter12') {
          this.changeURL('../chapter12/game/cashmachine9.html')
        } else {
          this.changeURL('none')
        }
        this.currentMessage = 'You do not have enough credits.'
      } else {
        console.log(
          personData.credits,
          personData.credits - credits,
          credits,
          'currentmodule',
          this.currentmodule
        )
        this.$store.commit('setuser/updatePerson', personData)
        this.$store.commit('SET_PEOPLE', personData)
        this.currentMessage = 'Thank you for your purchase'
        this.currentStatus = false
        this.thisBuy = false
        if (this.currentmodule === 'chapter11') {
          this.changeURL('../chapter11/game/cashmachine10.html')
        } else if (this.currentmodule === 'chapter12') {
          this.changeURL('../chapter12/game/cashmachine10.html')
        } else {
          this.changeURL('none')
        }
      }
    },
  },
  mounted: function () {
    const script = document.createElement('script')
    const ClientID = 'sb&enable-funding=venmo'
    script.src = `https://www.paypal.com/sdk/js?client-id=${ClientID}`
    script.addEventListener('load', this.setLoaded)
    document.body.appendChild(script)
    this.checkAvailable()
  },
}
</script>
