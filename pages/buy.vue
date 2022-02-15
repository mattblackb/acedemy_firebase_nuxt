<template>
<main>
    <NavBar />
    <v-container>
    <h1>Buy credits</h1>

    <p>Buy 100 credits for $10 <v-btn @click="creditCost = 10">Choose $10</v-btn></p>
    <p>Buy 250 credits for $20 <v-btn @click="creditCost = 20">Choose $20</v-btn></p>
    <p> Buy 400 credits for $30 <v-btn @click="creditCost = 30">Choose $30</v-btn></p>

    <h3>Currently you are buying ${{creditCost}} worth of credits</h3>
    <h2><b>Currently you have: {{$store.state.person.credits}} credits</b></h2>
    
    <div ref="paypal"></div>
    </v-container>
    <v-snackbar
        :timeout="4000"
        v-model="snackbar"
        absolute
        top
        center
         color="green accent-2"
      >
        <h2>{{ snackbarText }}</h2>
      </v-snackbar>
</main>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
export default ({
  name: "BuyCredits",
   data: () => ({
     creditCost: 10,
         snackbar: false,
      snackbarText: 'No error message',
 }),

    methods: {
		...mapGetters("stories",["getStories"]),
  setLoaded: function() {
			window.paypal
			.Buttons({
			createOrder: (data, actions) => {
				return actions.order.create({
				purchase_units: [
				{
					amount: {
					value: this.creditCost,
					},
				},
				],
				});
			},
			onApprove: async (data, actions) => {
				const order = await actions.order.capture();
				if(order.status) {
					console.log(order.purchase_units[0].amount);
					if(order.purchase_units[0].amount.value === '10.00'){
						let personData = {...this.$store.state.person};
						personData.credits = personData.credits + 100;
						this.$store.commit('setuser/updatePerson', personData)
						this.$store.commit('SET_PEOPLE', personData)
						this.currentStatus = true;
                         this.snackbarText="You have succesfully purchased 100 credits!"
                        this.snackbar = true
					}
                    if(order.purchase_units[0].amount.value === '20.00'){
						let personData = {...this.$store.state.person};
						personData.credits = personData.credits + 250;
						this.$store.commit('setuser/updatePerson', personData)
						this.$store.commit('SET_PEOPLE', personData)
						this.currentStatus = true;
                           this.snackbarText="You have succesfully purchased 250 credits!"
                        this.snackbar = true
					}
                         if(order.purchase_units[0].amount.value === '30.00'){
						let personData = {...this.$store.state.person};
						personData.credits = personData.credits + 400;
						this.$store.commit('setuser/updatePerson', personData)
						this.$store.commit('SET_PEOPLE', personData)
						this.currentStatus = true;
                        this.snackbarText="You have succesfully purchased 400 credits!"
                        this.snackbar = true
					}
                    

				}
				// ajax request
			},
			onError: err => {
				console.log(err);
			}
			})
			.render(this.$refs.paypal);
		}
    },
 mounted: function() {
    const script = document.createElement("script");
    const ClientID = "sb&enable-funding=venmo";
    script.src = `https://www.paypal.com/sdk/js?client-id=${ClientID}`;
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  computed:{
      userDetails (){
          if(this.$store.state.person) {
              return this.$store.state.person
          }
      },
       stories (){
                if(this.$store.state.stories) {
                    return this.$store.state.stories
                }
            }
    }
})
</script>
