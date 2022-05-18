<template>
   
   <v-row class="pa-5">
    <v-col  v-for="(achievement, name) in introAchievments" class="split5">
        <span v-if="achievement.value == 0 || achievement.value == 1">
           <img  v-if=" achievement.value == 1" :src="'/ep1pt1/game/buttonsetc/endcards/' + achievement.keyname + '.jpg'"  >
           <img  v-else :src="'/ep1pt1/game/buttonsetc/endcards/' + achievement.keyname + '_blank.jpg'"  >
        </span>
        </v-col >
   </v-row>

</template>
<script>
export default({
 props: {
        introAchievments: {
        type: Array,
        required: true
        }
    }
})
</script>

<style scoped>
img {max-width: 100%; border: solid 1px black}
.split5 {min-width: 20%}
</style>