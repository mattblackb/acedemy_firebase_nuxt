function setCookiesOnEntry() {
  var allVars = getUrlVars()
  if (allVars) {
    //set cookies to passed variables
    console.log('allVars', allVars, allVars.length)
    allVars.forEach((sessionVar) => {
      //get key of sessionVar
      const key = Object.keys(sessionVar)[0]
      const value = sessionVar[key]
      //   console.log('sessionVar', sessionVar, 'key', key, '-', value)
      sessionStorage.setItem(key, value)
    })
  }
}

// if(readVar('ch1_complete') === 0) {
//     console.log('set Cookies')
setCookiesOnEntry()
// }

function getUrlVars() {
  //Get the current location and parse string data to get cookie values
  const Achievements = parent.c_1.returnAchievements()

  return Achievements
}
