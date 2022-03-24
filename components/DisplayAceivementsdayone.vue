<template>
	<v-row class="pa-5">
    Day one
        <div v-for="(achievement, name) in introAchievments">
        <div  v-if="achievement == 0 || achievement == 1">
           <img  v-if=" achievement == 1" :src="'/academy_episode_1/game/buttonsetc/endcards/' + name + '.jpg'" v-bind:alt="pic" >
           <img  v-else :src="'/academy_episode_1/game/buttonsetc/endcards/' + name + '_blank.jpg'" v-bind:alt="pic" >
        </div>
        </div>
    </v-row>
</template>
<script>

export default({
 props: {
        introAchievments: {
        type: Object,
        required: true
        }
    },
})
</script>