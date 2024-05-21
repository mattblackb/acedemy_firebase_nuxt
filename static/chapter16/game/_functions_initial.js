//MB Added post message
//Functions initial for Chapter Fifteen - passed into Chapter Sixteen
//MB added
var getCookies = function (url) {
  // let cookieArr = ['rollup_ga_F1G3E656YZ',"_gac_UA-37952868-41","1279799279", "_gac_UA-37952868-51", "_hp2_props.1279799279", "ajs_anonymous_id", "ajs_user_id", "ga_Rollup_gid", "_fbp", "_ga", "notice_gdpr_prefs", "_gcl_au", "rollup_ga", "notice_behavior", "optimizelyEndUserId", "_fcdscst", "_gcl_aw", "ga_Rollup", "_gid", "_fcdscv", "user", "OptanonConsent"]
  var pairs = document.cookie.split(';')
  var cookies = {}
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=')
    if (pair[0] != ' user') {
      cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='))
    }
  }
  // window.top.location.href ="/save/"+url+"/"+cookies;
  return cookies
}

var getAllCookiesJSON = function (url) {
  var myCookies = getCookies(url) //GET JSON ARRAY
  // console.log(JSON.stringify(getCookies()); // "do not tell you
  myCookiesJSON = JSON.stringify(myCookies)
  window.top.location.href = '/save/' + url + '/' + btoa(myCookiesJSON)
}

function getUrlVars() {
  //Get the current location and parse string data to get cookie values
  const Achievements = parent.c_1.returnAchievements()

  return Achievements
}

function setCookie(name, value, days) {
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    var expires = '; expires=' + date.toGMTString()
  } else var expires = ''
  document.cookie = name + '=' + value + expires + '; path=/'
}

cookiesToKeep = [
  'ch13_bridgette_sex',
  'ch14_bridgette_sex',
  'ch14_didi_sex',
  'ch14_jodie_sex',
  'ch14_principal_sex',
  'ch14_maria_sex',
  'ch14_annie_sex',
  'ch14_lola_sex',
  'ch14_holly_sex',
  'ch14_alicia_sex',
  'ch14_laura_sex',
  'ch14_natalia_sex',
  'ch14_alexia_sex',
  'ch14bridgette_positive',
  'ch14bridgette_negative',
  'ch14jodie_positive',
  'ch14jodie_negative',
  'ch14start_bridgette',
  'ch14start_threesome',
  'ch14start_laura',
  'ch14help_megan',
  'ch14bridgette_key',
  'ch14have_package',
  'ch15have_package',
  'ch15leave_message',
  'ch15annie_abandoned',
  'ch15amy_bridgette',
  'ch15bridgette_positive',
  'ch15bridgette_negative',
  'ch15jodie_positive',
  'ch15jodie_negative',
  'ch15annie_positive',
  'ch15annie_negative',
  'ch15amy_positive',
  'ch15amy_negative',
  'ch15holly_positive',
  'ch15holly_negative',

]

const setCookiesOnEntry = async function () {
  console.log('setCookiesOnEntry', cookiesToKeep)
  var allVars = getUrlVars()
  //parse string allVars to Json

  if (allVars) {
    if (typeof allVars === 'object') {
      allVars = allVars
    } else {
      allVars = JSON.parse(allVars)
    }
    //set cookies to passed variables
    let setC = true
    Object.keys(allVars).map(async (cookie) => {
      // console.log('cookie', cookie, allVars[cookie])
      var date = new Date()
      date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000)
      var expires = '; expires=' + date.toGMTString()
      //check that cookie contains ch15
      if (cookie.includes('ch15') || cookiesToKeep.includes(cookie)) {
        document.cookie = cookie + '=' + allVars[cookie] + expires + '; path=/'
      }
    })
  }
}

function clearUnwantedCookies() {
  console.log('cookies to keep...')

  //get all cookies and delete the ones not in the array
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    const cookieName = cookie.split('=')[0]

    if (!cookiesToKeep.includes(cookieName)) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
      console.log('cookie', cookieName)
    }
  }
}