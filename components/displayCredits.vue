<template>
	<v-row class="pa-5">
		<div v-if="!currentStatus"  >
			<div class="alert alert-danger" role="alert">
            <p>Credits needed: {{currentCreditsneeded}}</p>
			</div>
			<!-- <p>Purchase credits?</p> -->
			<!-- <button type="button" class="btn btn-primary">Buy Credits</button> -->
			<!-- <div ref="paypal"></div> -->
			<h3>Buy credit facility currently disabled</h3>
		
    
		</div>
		<div v-else>
			<p><b>{{selectedStory.name}}</b></p>
			<p>{{selectedStory.description}}</p>
			<button type="button" class="btn btn-primary" v-on:click="buyModule">Buy access with {{selectedStory.cost}} Credits</button>
		</div>

	</v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default({
    data() {
		return {
			currentBuy: this.$route.params.id,
			selectedStory: {},
			currentStatus: false,
			currentMessage: 'You do not have enough credits.',
			storyId: ""
		}
	},
    props: {
        currentCreditsneeded: {
        type: Number,
        required: true
        },
        currentmodule: {
            type: String,
            required: true
        }
    },
    methods: {
		...mapGetters("stories",["getStories"]),
		setLoaded: function() {
			window.paypal
			.Buttons({
			createOrder: (data, actions) => {
				console.log('Creating order..', this.order)
				return actions.order.create({
				purchase_units: [
				{
					amount: {
					value: "10",
					},
				},
				],
				});
			},
			onApprove: async (data, actions) => {
				const order = await actions.order.capture();
				if(order.status) {
					if(order.purchase_units[0].amount.value === '10.00'){
						let personData = {...this.$store.state.person};
						personData.credits = personData.credits + 100;
						this.$store.commit('setuser/updatePerson', personData)
						this.$store.commit('SET_PEOPLE', personData)
						this.currentStatus = true;
					}
				}
				// ajax request
			},
			onError: err => {
				console.log(err);
			}
			})
			.render(this.$refs.paypal);
		},
        checkAvailable() {
			 if(this.$store.state.person) {
		
                 let personData = this.$store.state.person
				let storiesData = this.$store.getters['stories/getStories']
				//LOOP all stories - get applicable story
				storiesData.map((story) => {
					
					if(story.id == this.currentmodule){
							// console.log('Story', story.id, this.currentmodule);
						this.selectedStory = story;
					}
				})
						 console.log(this.currentCreditsneeded, personData.credits);
			if(personData.credits >= this.currentCreditsneeded){
				this.currentStatus = true;
			
			}
			//Check that user hasn't already bought
			personData.available_modules.map((module) => {
				if(module === this.currentmodule){
					this.currentMessage = 'You already have access to this bonus scene';
					// this.currentStatus = false;
				}
				})
             	} 
		},

		buyModule() {
			let personData = {...this.$store.state.person};
			personData.available_modules.push(this.selectedStory.id);
			console.log(personData);
			personData.credits = personData.credits - this.selectedStory.cost;
			  this.$store.commit('setuser/updatePerson', personData)
                this.$store.commit('SET_PEOPLE', personData)
			this.currentMessage = 'Thank you - you have now unlocked this scene';
			this.currentStatus = false;
		},
    },
    mounted: function() {
    const script = document.createElement("script");
    const ClientID = "sb&enable-funding=venmo";
    script.src = `https://www.paypal.com/sdk/js?client-id=${ClientID}`;
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
	this.checkAvailable();
  },
})
</script>
