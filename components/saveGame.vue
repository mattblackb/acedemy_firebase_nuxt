<template>
	<v-row class="pa-5">
		<h1>{{currentBuy}}</h1>
        <p>{{currentMessage}}</p>


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
			const today = new Date();
			const yyyy = today.getFullYear();
			let mm = today.getMonth() + 1; // Months start at 0!
			let dd = today.getDate();

			if (dd < 10) dd = '0' + dd;
			if (mm < 10) mm = '0' + mm;

			const formattedDate = dd + '/' + mm + '/' + yyyy;
			this.cookies['date'] = formattedDate;
			 personData.saved_games.push(this.cookies);

			  this.$store.commit('setuser/updatePerson', personData)
                // this.$store.commit('SET_PEOPLE', personData)
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
