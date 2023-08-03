//MB Added post message

//Functions for Chapter Eleven

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

function getCash(cashVal) {
  let returnedState = parent.c_1.buyCash(cashVal)

  const name = 'cash='
  const cDecoded = decodeURIComponent(document.cookie) //to be careful
  const cArr = cDecoded.split('; ')
  let res
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length)
  })
  //check that res has a value
  if (!res) {
    res = 0
  }
  //set a timeout to check wheter the cash has been updated
  wait(res, location)

  return returnedState
}

function wait(initialValue, location) {
  const name = 'cash='
  const cDecoded = decodeURIComponent(document.cookie) //to be careful
  const cArr = cDecoded.split('; ')
  let newValue
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) newValue = val.substring(name.length)
  })
  // console.log(
  //   'initialValue',
  //   initialValue,
  //   'newValue',
  //   newValue,
  //   'location',
  //   location
  // )

  if (initialValue === newValue) {
    setTimeout(wait, 1000, initialValue, location)
  } else {
    // CODE to launch until condition is met
    //redirect user to new page after cash has been updated
    window.location.replace(location)
  }
}

function clearUnwantedCookies() {
  cookiesToKeep = [
    'alicia_score',
    'amy_score',
    'annie_score',
    'bridgette_score',
    'didi_score',
    'genevieve_score',
    'holly_score',
    'isabella_score',
    'jodie_score',
    'laura_score',
    'lola_score',
    'maria_score',
    'megan_score',
    'olivia_score',
    'principal_score',
    'ch1bonus1',
    'ch2bonus1',
    'ch2bonus2',
    'ch2_maria_sex',
    'ch2_jodie_positive',
    'ch2_jodie_cum',
    'ch2_annie_positive',
    'ch2_annie_cum',
    'ch3bonus1',
    'ch3_bridgette_positive',
    'ch3_annie_positive',
    'ch3_holly_positive',
    'ch3_lola_positive',
    'ch4bonus1',
    'ch4bonus2',
    'ch4bonus3',
    'ch4bonus4',
    'ch4_annie_cum',
    'ch4_annie_positive',
    'ch4_holly_sex',
    'ch4_holly_positive',
    'ch4_lola_sex',
    'ch4_lola_positive',
    'ch4_jodie_positive',
    'ch4_jodie_sex',
    'ch4girls_shower',
    'ch5bonus1',
    'ch5bonus2',
    'ch5_amy_sex',
    'ch5amy_bonus',
    'ch5_amy_positive',
    'ch5annie_bonus',
    'ch5_annie_sex',
    'ch5_annie_positive',
    'ch6bonus1',
    'ch6bonus2',
    'ch6jodie_bonus',
    'ch6bridgette_bonus',
    'ch6_jodie_positive',
    'ch6_jodie_sex',
    'ch6_bridgette_positive',
    'ch6_bridgette_sex',
    'ch6_alicia_positive',
    'ch6_success',
    'ch7bonus1',
    'ch7bridgette_bonus',
    'ch7_jodie_sex',
    'ch7_jodie_positive',
    'ch7_jodie_negative',
    'ch7_lola_sex',
    'ch7_lola_positive',
    'ch7_principal_positive',
    'ch7_principal_negative',
    'ch7_bridgette_sex',
    'ch7_bridgette_positive',
    'ch7_bridgette_negative',
    'ch7_success',
    'ch8bonus1',
    'ch8bonus2',
    'ch8bonus3',
    'ch8bonus4',
    'ch8gym_bonus',
    'ch8annie_bonus',
    'ch8alicia_bonus',
    'ch8principal_bonus',
    'ch8principal_fired',
    'ch8bridgette_number',
    'ch8_bridgette_positive',
    'ch8_bridgette_negative',
    'ch8_annie_sex"',
    'ch8_annie_positive',
    'ch8_alicia_sex',
    'ch8_alicia_positive',
    'ch8_fired',
    'ch8_success',
    'ch9bonus1',
    'ch9alexia_bonus',
    'ch9rest_maria',
    'ch9rest_ tip',
    'ch9rest_man',
    'ch9bar_girl',
    'ch9bar_touch',
    'ch9park_naked',
    'ch9park_tits',
    'ch9_success_bridgette',
    'ch9_success_alexia',
    'ch9_fail_alexia',
	'ch10bonus1',
	'ch10bonus2',
    'ch10lolamoviebonus',
	'ch10lolaviewbonus',
	'ch10vip_tickets',
	'ch10didi_invite',
	'ch10bridgette_continue',
	'ch10_bridgette_positive',
	'ch10_bridgette_negative',
	'ch10_lola_positive',
	'ch10_didi_positive',
]
  var allVars = getUrlVars()
  if (allVars) {
    //set cookies to passed variables

    Object.keys(allVars).map((cookie) => {
      //if cookie name is not in cookiesToKeep array, delete it
      if (!cookiesToKeep.includes(cookie)) {
        document.cookie =
          cookie + '=; expires=Thu, 01-Jan-70 00:00:01 GMT' + '; path=/'
        // console.log('cookissse', cookie)
      } else {
        console.log('cookissse saved', cookie)
      }
    })
  }
}

//setCookiesOnEntry();

if (parent.c_1) {
} else {
  window.location.href = '/'
}
function emitCheck(method) {
  parent.c_1.greet(method)
}
//Added for bonus replay - displays modal to replay bonus
function replayBonus(bonus) {
  console.log('Replay bonus', bonus)
  parent.c_1.replayBonus(bonus)
}
//End Added for bonus replay - displays modal to replay bonus
function getName(method) {
  var person = parent.c_1.Getname()
  cookievalue = person.name + ';'
  if (person) {
    document.cookie = 'playername=' + cookievalue
  } else {
    document.cookie = 'playername=Guest'
  }
}
function checkAvailable(method) {
  let returnedState = parent.c_1.checkAvailable(method)
  return returnedState
}
// const myTimeout = setInterval(hideShowButton, 1000);

var getCookies = function () {
  var pairs = document.cookie.split(';')
  var cookies = {}
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=')
    if (pair[0] != ' user') {
      cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='))
    }
  }
  return cookies
}

function saveProgress(route) {
  var myCookies = getCookies() //GET JSON ARRAY
  myCookiesJSON = JSON.stringify(myCookies)
  let returnedState = parent.c_1.saveProgress(myCookiesJSON, route)
  return returnedState
}

// Kills cookie

function deleteVar(name) {
  document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT' + '; path=/'
}

// Creates cookie

function setVar(name, value, expires) {
  document.cookie =
    name +
    '=' +
    escape(value) +
    '; path=/' +
    (expires == null ? '' : '; expires=' + expires.toGMTString())
}

// Checks cookie

function readVar(name) {
  var fullName = name + '='

  var val = 0

  var strings = document.cookie.split(';')

  for (var i = 0; i < strings.length; i++) {
    var str = strings[i]

    while (str.charAt(0) == ' ') str = str.substring(1, str.length)

    if (str.indexOf(fullName) == 0)
      val = parseInt(str.substring(fullName.length, str.length))

    if (isNaN(val)) val = 0
  }

  return val
}

// Other disable back

function disallowNav() {
  var disallowNav = 1

  if (disallowNav) {
    document.oncontextmenu = blockContextMenu

    document.onkeydown = blockKeyPresses

    // This part works for IE, but not Firefox

    undoBack()

    // This extra part is need for Firefox

    window.onload = window.onload
    undoBack()

    window.onpageshow = function (evt) {
      if (evt.persisted) undoBack()
    }

    window.onunload = function () {
      void 0
    }
  }
}

// No back button

function undoBack() {
  window.history.forward()
}

// No menu

function blockContextMenu() {
  event.cancelBubble = true

  event.returnValue = false

  return false
}

// Backup no back

function blockKeyPresses() {
  var keyBackspace = 8

  var keyF5 = 116

  if (event.keyCode == keyBackspace || event.keyCode == keyF5) {
    event.keyCode = 0

    event.returnValue = false
  }
}
// Increase cookie value

//adds 1 to cookie value

function varPlus1(name) {
  var val = readVar(name)

  val += 1

  setVar(name, val)
}

//adds 2 to cookie value

function varPlus2(name) {
  var val = readVar(name)

  val += 2

  setVar(name, val)
}

//adds 3 to cookie value

function varPlus3(name) {
  var val = readVar(name)

  val += 3

  setVar(name, val)
}

//adds 4 to cookie value

function varPlus4(name) {
  var val = readVar(name)

  val += 4

  setVar(name, val)
}

//adds 5 to cookie value

function varPlus5(name) {
  var val = readVar(name)

  val += 5

  setVar(name, val)
}

//adds 6 to cookie value

function varPlus6(name) {
  var val = readVar(name)

  val += 6

  setVar(name, val)
}

//adds 7 to cookie value

function varPlus7(name) {
  var val = readVar(name)

  val += 7

  setVar(name, val)
}

//adds 8 to cookie value

function varPlus8(name) {
  var val = readVar(name)

  val += 8

  setVar(name, val)
}

//adds 9 to cookie value

function varPlus9(name) {
  var val = readVar(name)

  val += 9

  setVar(name, val)
}

//adds 10 to cookie value

function varPlus10(name) {
  var val = readVar(name)

  val += 10

  setVar(name, val)	
}

//adds 15 to cookie value

function varPlus15(name) {
  var val = readVar(name)

  val += 15

  setVar(name, val)
}

//adds 20 to cookie value

function varPlus20(name) {
  var val = readVar(name)

  val += 20

  setVar(name, val)
}

//adds 30 to cookie value

function varPlus30(name) {
  var val = readVar(name)

  val += 30

  setVar(name, val)
}

//adds 40 to cookie value

function varPlus40(name) {
  var val = readVar(name)

  val += 40

  setVar(name, val)
}

//adds 50 to cookie value

function varPlus50(name) {
  var val = readVar(name)

  val += 50

  setVar(name, val)
}

//adds 60 to cookie value

function varPlus60(name) {
  var val = readVar(name)

  val += 60

  setVar(name, val)
}

//adds 70 to cookie value

function varPlus70(name) {
  var val = readVar(name)

  val += 70

  setVar(name, val)
}

//adds 80 to cookie value

function varPlus80(name) {
  var val = readVar(name)

  val += 80

  setVar(name, val)
}

//adds 90 to cookie value

function varPlus90(name) {
  var val = readVar(name)

  val += 90

  setVar(name, val)
}

//adds 100 to cookie value

function varPlus100(name) {
  var val = readVar(name)

  val += 100

  setVar(name, val)
}

//adds 200 to cookie value

function varPlus200(name) {
  var val = readVar(name)

  val += 200

  setVar(name, val)
}

//adds 300 to cookie value

function varPlus300(name) {
  var val = readVar(name)

  val += 300

  setVar(name, val)
}

//adds 400 to cookie value

function varPlus400(name) {
  var val = readVar(name)

  val += 400

  setVar(name, val)
}

//adds 500 to cookie value

function varPlus500(name) {
  var val = readVar(name)

  val += 500

  setVar(name, val)
}

// Decrease cookie value

// minus 1 cookie value

function varMinus1(name) {
  var val = readVar(name)

  val -= 1

  setVar(name, val)
}

// minus 2 cookie value

function varMinus2(name) {
  var val = readVar(name)

  val -= 2

  setVar(name, val)
}

// minus 3 cookie value

function varMinus3(name) {
  var val = readVar(name)

  val -= 3

  setVar(name, val)
}

// minus 4 cookie value

function varMinus4(name) {
  var val = readVar(name)

  val -= 4

  setVar(name, val)
}

// minus 5 cookie value

function varMinus5(name) {
  var val = readVar(name)

  val -= 5

  setVar(name, val)
}

// minus 10 cookie value

function varMinus10(name) {
  var val = readVar(name)

  val -= 10

  setVar(name, val)
}

// minus 20 cookie value

function varMinus20(name) {
  var val = readVar(name)

  val -= 20

  setVar(name, val)
}

// minus 30 cookie value

function varMinus30(name) {
  var val = readVar(name)

  val -= 30

  setVar(name, val)
}

// minus 40 cookie value

function varMinus40(name) {
  var val = readVar(name)

  val -= 40

  setVar(name, val)
}

// minus 50 cookie value

function varMinus50(name) {
  var val = readVar(name)

  val -= 50

  setVar(name, val)
}

// minus 60 cookie value

function varMinus60(name) {
  var val = readVar(name)

  val -= 60

  setVar(name, val)
}

// minus 70 cookie value

function varMinus70(name) {
  var val = readVar(name)

  val -= 70

  setVar(name, val)
}

// minus 80 cookie value

function varMinus80(name) {
  var val = readVar(name)

  val -= 80

  setVar(name, val)
}

// minus 90 cookie value

function varMinus90(name) {
  var val = readVar(name)

  val -= 90

  setVar(name, val)
}

// minus 100 cookie value

function varMinus100(name) {
  var val = readVar(name)

  val -= 100

  setVar(name, val)
}

// minus 200 cookie value

function varMinus200(name) {
  var val = readVar(name)

  val -= 200

  setVar(name, val)
}

// minus 300 cookie value

function varMinus300(name) {
  var val = readVar(name)

  val -= 300

  setVar(name, val)
}

// minus 400 cookie value

function varMinus400(name) {
  var val = readVar(name)

  val -= 400

  setVar(name, val)
}

// minus 500 cookie value

function varMinus500(name) {
  var val = readVar(name)

  val -= 500

  setVar(name, val)
}

// Zero cookie value

function varZero(name) {
  var val = readVar(name)

  val = 0

  setVar(name, val)
}
