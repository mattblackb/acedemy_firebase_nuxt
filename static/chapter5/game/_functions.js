//MB Added post message

//Functions for Chapter Five

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
    'ch4_success',
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
    'ch5jodie_phone',
    'ch5day3_entry',
    'ch5jodie_invite',
    'ch5morning_meeting',
    'ch5annie_message',
    'ch5megan_secrets',
    'ch5spare_key',
    'cctv4_unlock',
    'ch5hidden_cam',
    'ch5maria_office',
    'ch5maria_blowjob',
    'ch5holly_visit',
    'ch5holly_cctv',
    'ch5principal_task',
    'ch5meet_girls',
    'ch5principal_house',
    'ch5annie_garden',
    'ch5garden_suck',
    'ch5garden_invite',
    'ch5principal_documents',
    'ch5barn_photoshoot',
    'ch5amy_photoshoot',
    'ch5amy_naked',
    'ch5amy_kiss',
    'ch5amy_phone',
    'ch5annie_bonus',
    'ch5bonus1',
    'ch5annie_cunnilingus',
    'ch5annie_missionary',
    'ch5annie_doggy',
    'ch5annie_anal',
    'ch5annie_anal_cum',
    'ch5annie_suck',
    'ch5annie_cowgirl',
    'ch5annie_orgasm',
    'ch5annie_cowgirl_cum',
    'ch5annie_suck_cum',
    'ch5annie_deepthroat',
    'ch5annie_facial_cum',
    'ch5annie_tits_cum',
    'ch5annie_selfie',
    'annie_sex_score',
    'annie_pic1',
    'annie_pic2',
    'annie_pic3',
    'annie_pic4',
    'ch5amy_bonus',
    'ch5bonus2',
    'ch5amy_stroke',
    'ch5amy_stroke_cum',
    'ch5amy_suck',
    'ch5amy_tits',
    'ch5amy_cunnilingus',
    'ch5amy_fingers',
    'ch5amy_fingers_orgasm',
    'ch5amy_pussy',
    'ch5amy_pussy_orgasm',
    'ch5amy_pussy_cum',
    'ch5amy_ass_cum',
    'ch5amy_throat_cum',
    'ch5amy_facial_cum',
    'ch5amy_mouth_cum',
    'code2_attempt',
    'open_message',
    'ch5camera_on',
    'ch5documents',
    'photo_1',
    'photo_2',
    'photo_3',
    'photo_4',
    'photo_5',
    'photo_6',
    'photo_7',
    'photo_8',
    'photo_9',
    'photo_10',
    'photo_11',
    'photo_12',
    'ch5_amy_positive',
    'ch5_amy_sex',
    'ch5_annie_positive',
    'ch5_annie_sex',
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

function hideShowButton() {
  let showcontinue = checkAvailable('VVJ5mVW6zM0f3fygZzHB')
  if (showcontinue) {
    document.getElementById('buybutton').style.display = 'none'
    document.getElementById('availableButton').style.display = 'block'
    document.getElementById('buybuttonImage').style.display = 'none'
    document.getElementById('availableButtonImage').style.display = 'block'
  } else {
    document.getElementById('buybutton').style.display = 'block'
    document.getElementById('availableButton').style.display = 'none'
    document.getElementById('buybuttonImage').style.display = 'block'
    document.getElementById('availableButtonImage').style.display = 'none'
  }
  function moduleAvailable(state) {
    if (state) {
      document.getElementById('buybutton').style.display = 'none'
      document.getElementById('availableButton').style.display = 'block'
      document.getElementById('buybuttonImage').style.display = 'none'
      document.getElementById('availableButtonimage').style.display = 'block'
    }
  }
}
function hideShowButton2() {
  let showcontinue = checkAvailable('5GvSh36NPJVmgz0LKXeX')
  if (showcontinue) {
    document.getElementById('buybutton').style.display = 'none'
    document.getElementById('availableButton').style.display = 'block'
    document.getElementById('buybuttonImage').style.display = 'none'
    document.getElementById('availableButtonImage').style.display = 'block'
  } else {
    document.getElementById('buybutton').style.display = 'block'
    document.getElementById('availableButton').style.display = 'none'
    document.getElementById('buybuttonImage').style.display = 'block'
    document.getElementById('availableButtonImage').style.display = 'none'
  }
  function moduleAvailable(state) {
    if (state) {
      document.getElementById('buybutton').style.display = 'none'
      document.getElementById('availableButton').style.display = 'block'
      document.getElementById('buybuttonImage').style.display = 'none'
      document.getElementById('availableButtonimage').style.display = 'block'
    }
  }
}

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
