//MB Added post message
//Functions initial for Chapter Eleven - passed into Chapter Twelve
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
  'ch2_maria_sex',
  'ch4_holly_sex',
  'ch4_lola_sex',
  'ch4_jodie_sex',
  'ch5_amy_sex',
  'ch5_annie_sex',
  'ch6_jodie_sex',
  'ch6_bridgette_sex',
  'ch7_jodie_sex',
  'ch7_lola_sex',
  'ch7_bridgette_sex',
  'ch8_annie_sex"',
  'ch8_alicia_sex',
  'ch8_fired',
  'ch8principal_fired',
  'ch9_alexia_sex',
  'ch10_lola_sex',
  'ch10_bridgette_negative',
  'ch11_alicia_sex',
  'ch11_laura_sex',
  'ch10_didi_positive',
  'ch9rest_tip',
  'ch10didi_invite',
  'ch10vip_tickets',
  'ch10run_away',
  'ch10bridgette_continue',
  'ch11bridgette_continue',
  'ch11brass_champagne',
  'ch11didi_reject',
  'ch11_bridgette_negative',
  'cash',
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
      //check that cookie contains ch11
      if (cookie.includes('ch11') || cookiesToKeep.includes(cookie)) {
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