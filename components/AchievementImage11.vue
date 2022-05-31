<template>
   <main>
   <v-row>
   <h2>Introduction</h2>
   </v-row>
   <v-row class="pa-5">
   
    <v-col v-for="(achievement, name) in introAchievments"   cols="2" class="split5">
        <span v-if="achievement.value == 0 || achievement.value == 1" >
  
           <img  v-if=" achievement.value == 1" :src="'/chapter2/game/buttonsetc/endcards/' + achievement.keyname + '.jpg'"  >
           <img  v-else :src="'/chapter2/game/buttonsetc/endcards/' + achievement.keyname + '_blank.jpg'"  >
        </span>
        </v-col >
   </v-row>

   <v-row>
   <h2>Bonus</h2>
   </v-row>
   <v-row class="pa-5">

    <v-col v-for="(achievement, name) in bonusAchievments"   cols="2" class="split5">
        <span v-if="achievement.value == 0 || achievement.value == 1" >
           <img  v-if=" achievement.value == 1" :src="'/chapter2/game/buttonsetc/endcards/' + achievement.keyname + '.jpg'"  >
         <img  v-if=" achievement.value == 0 && achievement.keyname != 'introbonus'" :src="'/chapter2/game/buttonsetc/endcards/ach_blank.jpg'"  >
          <img  v-if=" achievement.value == 0 && achievement.keyname == 'introbonus'" :src="'/chapter2/game/buttonsetc/endcards/introbonus_blank.jpg'"  >

        </span>
        </v-col >
   </v-row>
   </main>
</template>
<script>
export default({
 props: {
        introAchievments: {
        type: Array,
        required: true
        },
        bonusAchievments: {
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