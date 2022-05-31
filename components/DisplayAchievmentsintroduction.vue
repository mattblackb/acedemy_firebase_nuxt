<template>
	

      <AcheivementImageIntroduction :introAchievments="sortArryObjects('achievements')" :bonusAchievments="sortArryObjects('bonus')"/>


 
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
        sortArryObjects (type) {
                var temparray = new Array();
                var bonusArray = new Array();
                let that = this 
                  Object.keys(that.introAchievments).map(function(keyName, index) {
                        
                       
                          if(keyName.includes('bonus')) {
                             if(keyName.includes('_')) {
                               if(keyName == 'natalia_bonus'){
                                  bonusArray.push({'keyname': 'introbonus', 'value': that.introAchievments[keyName], 'sorted':0})
                               } else {
                                 const removed = keyName.replace('_','');
                                  var substr = (keyName).substring(13);
                                    if( parseInt(substr)) {
                                 bonusArray.push({'keyname': removed, 'value': that.introAchievments[keyName], 'sorted': parseInt(substr)})
                                }
                               }
                                 
                             
                              // bonusArray.push({'keyname': keyName, 'value': that.introAchievments[keyName], 'sorted': parseInt(substr)})
                             }
                          } else {
                            var substr = (keyName).substring(8);

                            if( parseInt(substr)) {
                            temparray.push({'keyname': keyName, 'value': that.introAchievments[keyName], 'sorted': parseInt(substr)})
                            }
                          }
                    });
                temparray.sort((a,b) => (a.sorted > b.sorted) ? 1 : ((b.sorted > a.sorted) ? -1 : 0))
                bonusArray.sort((a,b) => (a.sorted > b.sorted) ? 1 : ((b.sorted > a.sorted) ? -1 : 0))
                bonusArray.map(function(keyName, index) {
                  var keyname = bonusArray[index].keyname;
                  console.log(keyname, that.introAchievments[keyname])
                  if(that.introAchievments[keyname] == "1") {
                    bonusArray[index].value = "1"
                  } else {
                     bonusArray[index].value = "0"
                  }
                })
                console.log(temparray, bonusArray);
                if(type === "bonus"){
                    return bonusArray
                } else {
                        return temparray    
                }
           
            }      
    },
    computed: {
        dortItem() {
            console.log('dort')
        }
       
    }
  
})
</script>
