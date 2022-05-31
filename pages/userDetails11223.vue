<template>
<div id="app">
  <div class="search-wrapper">
         <label>Search email:</label>
    <input type="text" v-model="search" placeholder="Search email.."/>
   
  </div>
  <div class="wrapper">
    <div v-for="item in returnCurrent(this.$store.state.stories.alPeople)" :key="item.id">
      {{item.id}} | {{item.email}}
    </div>
   

  </div>
</div>
</template>


<script>
import { mapActions } from "vuex";
export default {  
    data () {
      return {
        dialog: false,
        dialogSave: false,
        cookieJson: '',
        currentCreditsneeded: [],
         currentmodule: "",
         search: ""
      }
    },
     methods: {   ...mapActions(["stories/setAllPeople"]),
      returnCurrent(alPeople) {
        const that = this;
        var returnedArray = [];
        const map1 = alPeople.map(function(x){
           if(that.search === '') {
          returnedArray.push({ id: x.id, email: x.email })
           } else{
             let result = x.email.includes(that.search);
             if(result){
                returnedArray.push({ id: x.id, email: x.email })
             }
           }
      });
        return returnedArray
      }
      },
    mounted() {
       this.$store.dispatch('stories/setAllPeople')
    },
    computed:{
    
      userDetails (){
       console.log(this.state)
      }
      
    }
}
</script>