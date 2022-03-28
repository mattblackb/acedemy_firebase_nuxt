<template>
	

      <AcheivementImage :introAchievments="sortArryObjects()" />

 
</template>
<script>

export default({
 props: {
        introAchievments: {
        type: Object,
        required: true
        }
    },
    data () {
      return {
        sortedAchievements: null
      }
    },
    methods: {
        sortArryObjects ( ) {
                var temparray = new Array();
                let that = this 
                  Object.keys(that.introAchievments).map(function(keyName, index) {
                          var substr = (keyName).substring(6);
                          var newtemp = [];
                        temparray.push({'keyname': keyName, 'value': that.introAchievments[keyName], 'sorted': parseInt(substr)})
                    });
                temparray.sort((a,b) => (a.sorted > b.sorted) ? 1 : ((b.sorted > a.sorted) ? -1 : 0))
               return temparray
            }      
    },
    computed: {
        dortItem() {
            console.log('dort')
        }
       
    }
  
})
</script>