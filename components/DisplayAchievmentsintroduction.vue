<template>
	<v-row class="pa-5">
        {{introAchievments}}
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