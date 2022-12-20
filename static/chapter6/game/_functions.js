//MB Added post message

//Functions for Chapter Six

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
    'progress',
    'report',
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
    'ch5_success',
    'ch5bonus1',
    'ch5bonus2',
    'ch5_amy_sex',
    'ch5amy_bonus',
    'ch5_amy_positive',
    'ch5annie_bonus',
    'ch5_annie_sex',
    'ch5_annie_positive',
    'ch5documents',
    'ch5annie_garden',
    'ch5jodie_invite',
    'ch5garden_suck',
    'ch5spare_key',
    'ch6amy_message',
    'ch6annie_message',
    'ch6annie_documents',
    'ch6didi_documents',
    'ch6didi_keys',
    'ch6bridgette_workout',
    'ch6bridgette_shower',
    'ch6bridgette_caught',
    'ch6bridgette_cctv',
    'ch6bridgette_convo',
    'ch6annie_photo',
    'ch6jodie_archive',
    'ch6jodie_massage',
    'ch6jodie_topless',
    'ch6jodie_elevator',
    'ch6alicia_library',
    'ch6alicia_help',
    'ch6annie_explicit',
    'ch6bridgette_report',
    'ch6bridgette_thigh',
    'ch6principal_update',
    'ch6bridgette_touch',
    'ch6principal_pleased',
    'ch6principal_reward',
    'ch6principal_blackmail',
    'ch6bar_invite',
    'ch6sebastian_panties',
    'ch6jodie_workout',
    'ch6jodie_suck',
    'ch6jodie_cum_face',
    'ch6drink_tip',
    'ch6help_girls',
    'ch6bridgette_car',
    'ch6bridgette_kiss',
    'ch6bridgette_invite',
    'ch6jodie_bonus',
    'ch6bonus1',
    'ch6jodie_orgasm_behind',
    'ch6jodie_suck_tits',
    'ch6jodie_orgasm_cunnilingus',
    'ch6jodie_more_sucking',
    'ch6jodie_deepthroat',
    'ch6jodie_facefuck',
    'ch6jodie_facefuck_cum',
    'ch6jodie_orgasm_cowgirl',
    'ch6jodie_cowgirl_cum',
    'ch6bridgette_bonus',
    'ch6bonus2',
    'ch6bridgette_stroke',
    'ch6bridgette_suck',
    'ch6bridgette_undress',
    'ch6bridgette_cowgirl',
    'ch6bridgette_orgasm_cowgirl',
    'ch6bridgette_tits',
    'ch6bridgette_titfuck',
    'ch6bridgette_handjob',
    'ch6bridgette_blowjob',
    'ch6bridgette_deepthroat',
    'ch6bridgette_throat_cum',
    'ch6bridgette_dream',
    'ch6bridgette_masturbate',
    'ch6bridgette_watch',
    'ch6bridgette_taste',
    'ch6bridgette_orgasm_oral',
    'ch6bridgette_pussy',
    'ch6bridgette_orgasm_pussy',
    'ch6bridgette_tits_cum',
    'ch6bridgette_face_cum',
    'ch6bridgette_body_cum',
    'ch6bridgette_shower',
    'ch6bridgette_asleep',
    'ch6bridgette_caught',
    'ch6bridgette_thigh',
    'ch6documents',
    'ch6annie_dickpic',
    'ch6amy_dickpic',
    'ch6message_deleted',
    'ch6principal_phone',
    'ch6sebastian_convo',
    'ch6jodie_invite',
    'ch6jodie_kiss',
    'ch6bar_drinks',
    'ch6_drink_beer',
    'ch6_drink_whiskey',
    'ch6_drink_wine',
    'ch6bridgette_upset',
    'ch6bridgette_save',
    'ch6_jodie_positive',
    'ch6_jodie_sex',
    'ch6_bridgette_positive',
    'ch6_bridgette_sex',
    'ch6_alicia_positive',
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

// Alters cookie value

function varPlus1(name) {
  var val = readVar(name)

  val += 1

  setVar(name, val)
}

// Alters cookie value lower

function varMinus1(name) {
  var val = readVar(name)

  val -= 1

  setVar(name, val)
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

///cookie value to max

function varPlus100(name) {
  var val = readVar(name)

  val += 100

  setVar(name, val)
}

//sets cookie value to beginning

function varPlus30(name) {
  var val = readVar(name)

  val += 30

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

//adds 12 to cookie value

function varPlus12(name) {
  var val = readVar(name)

  val += 12

  setVar(name, val)
}

//adds 14 to cookie value

function varPlus14(name) {
  var val = readVar(name)

  val += 14

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

//adds 40 to cookie value

function varPlus40(name) {
  var val = readVar(name)

  val += 40

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

// minus 50 cookie value

function varZero(name) {
  var val = readVar(name)

  val = 0

  setVar(name, val)
}
