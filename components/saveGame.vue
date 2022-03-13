<template>
	<v-row class="pa-5">
		<h1>{{currentBuy}}</h1>
        <pre>{{currentMessage}}</pre>


	</v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default({
    data() {
		return {
			currentBuy: this.$route.name,
			selectedStory: {},
			currentMessage: 'Saving your data...',
			storyId: "",
            cookies: {}
		}
	},
    props: {
        cookieJson: {
        type: String,
        required: true
        }
    },
    methods: {
		...mapGetters("stories",["getStories"]),
	
		saveEpisode() {
			let personData = {...this.$store.state.person};
			
			 personData.saved_games.push(this.cookies);
          
			  this.$store.commit('setuser/updatePerson', personData)
                this.$store.commit('SET_PEOPLE', personData)
			this.currentMessage = 'This game has been saved you can see this game in your profile';
		
		},
    },
    mounted() {
        var decodedData = decodeURIComponent(this.cookieJson);
		// decodedData= atob(decodedData);
		var jsonObject = JSON.parse(decodedData);
        jsonObject['episode'] = this.currentBuy;
		this.cookies= jsonObject;
        this.saveEpisode();
    }
   
})
</script>
