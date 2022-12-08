
//MB Added post message

//Functions for Chapter Three

//MB added
var getCookies = function(url){
	// let cookieArr = ['rollup_ga_F1G3E656YZ',"_gac_UA-37952868-41","1279799279", "_gac_UA-37952868-51", "_hp2_props.1279799279", "ajs_anonymous_id", "ajs_user_id", "ga_Rollup_gid", "_fbp", "_ga", "notice_gdpr_prefs", "_gcl_au", "rollup_ga", "notice_behavior", "optimizelyEndUserId", "_fcdscst", "_gcl_aw", "ga_Rollup", "_gid", "_fcdscv", "user", "OptanonConsent"]
	  var pairs = document.cookie.split(";");
	  var cookies = {};
	  for (var i=0; i<pairs.length; i++){
		var pair = pairs[i].split("=");
		if(pair[0] != " user"){
		cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
		}
	  }
	  // window.top.location.href ="/save/"+url+"/"+cookies; 
      console.log(cookies);
	  return cookies;
	}
	
var getAllCookiesJSON = function(url) {
	var myCookies = getCookies(url); //GET JSON ARRAY
	// console.log(JSON.stringify(getCookies()); // "do not tell you
	myCookiesJSON = JSON.stringify(myCookies);
	window.top.location.href ="/save/"+url+"/"+btoa(myCookiesJSON); 
};


function getUrlVars() {//Get the current location and parse string data to get cookie values
    const Achievements = parent.c_1.returnAchievements();

	return Achievements;
}

function setCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
	}

function clearUnwantedCookies() {
  cookiesToKeep = [
    'ch1bonus1',
	'ch2_success',
    'ch2bonus1',
    'ch2bonus2',
	'ch2_maria_sex',
    'ch2_jodie_positive',
	'ch2_jodie_cum',
    'ch2_annie_positive',
	'ch2_annie_cum',
    'ch2annie_ride',
	'report',
	'ch3annie_convo',
	'ch3maria_convo',
	'ch3maria_go',
	'ch3maria_blowjob',
	'ch3maria_cum',
	'ch3day2_entry',
	'ch3principal_storeroom',
	'ch3principal_flattery',
	'ch3storeroom_codes',
	'cctv3_unlock',
	'ch3megan_cctv',
	'ch3studio_punctual',
	'ch3bridgette_studio',
	'ch3lola_studio',
	'ch3annie_technique',
	'ch3girl_fight',
	'ch3stop_fight',
	'ch3group1_studio',
	'ch3girls_thanks',
	'ch3studio_thanks',
	'ch3annie_suggestion',
	'ch3group2_studio',
	'ch3annie_poses',
	'ch3naked_studio',
	'ch3principal_warning',
	'ch3bridgette_bonus',
	'ch3bridgette_photos',
	'ch3bridgette_topless',
	'ch3bridgette_necklace',
	'ch3bridgette_boobs',
	'cumometer',
	'code1_attempt',
	'ch3principal_message',
	'annie_model',
	'lola_model',
	'studio_shot_genevieve',
	'studio_shot_isabella',
	'studio_shot_laura',
	'studio_shot_amy',
	'studio_shot_annie',
	'studio_shot_lola',
	'studio_shot_holly',
	'studio_shot',
	'ch3holly_blouse',
	'ch3holly_studio',
	'ch3annie_studio',
	'ch3naked_both',
	'ch3principal_studio',
	'ch3_maria_sex',
	'ch3_bridgette_positive',
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


if(parent.c_1){
} else {
    window.location.href = "/";
}
function emitCheck(method) 
{ 
    parent.c_1.greet(method)
} 
function getName(method) 
{ 
    var person = parent.c_1.Getname()
    cookievalue= person.name + ";";
    if(person){
    document.cookie="playername=" + cookievalue;
    } else {
        document.cookie="playername=Guest";
    }
} 
function checkAvailable(method) 
{ 
   let returnedState = parent.c_1.checkAvailable(method)
   return returnedState
} 
const myTimeout = setInterval(hideShowButton, 1000);

var getCookies = function(){
  var pairs = document.cookie.split(";");
      var cookies = {};
      for (var i=0; i<pairs.length; i++){
        var pair = pairs[i].split("=");
        if(pair[0] != " user"){
        cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
        }
      }
      return cookies;
    }
    

function saveProgress(route){
    var myCookies = getCookies(); //GET JSON ARRAY
    myCookiesJSON = JSON.stringify(myCookies);
    console.log('myCookiesJSON',myCookiesJSON);
    let returnedState = parent.c_1.saveProgress(myCookiesJSON, route)
    return returnedState
}

// Kills cookie
function deleteVar(name) 

{
    document.cookie = name + "=; expires=Thu, 01-Jan-70 00:00:01 GMT" + "; path=/";

} 

function hideShowButton() {
    let showcontinue = checkAvailable('VVJ5mVW6zM0f3fygZzHB');
if (showcontinue) {
   document.getElementById('buybutton').style.display = 'none';
   document.getElementById("availableButton").style.display = 'block';
   document.getElementById('buybuttonImage').style.display = 'none';
   document.getElementById("availableButtonImage").style.display = 'block';
} else {
    document.getElementById('buybutton').style.display = 'block';
    document.getElementById("availableButton").style.display = 'none';
    document.getElementById('buybuttonImage').style.display = 'block';
    document.getElementById("availableButtonImage").style.display = 'none';
}
function moduleAvailable(state) 
{ 
  if(state) {
    document.getElementById('buybutton').style.display = 'none';
   document.getElementById("availableButton").style.display = 'block';
   document.getElementById('buybuttonImage').style.display = 'none';
   document.getElementById("availableButtonimage").style.display = 'block';
  }
} 
}
function hideShowButton2() {
    let showcontinue = checkAvailable('5GvSh36NPJVmgz0LKXeX');
if (showcontinue) {
   document.getElementById('buybutton').style.display = 'none';
   document.getElementById("availableButton").style.display = 'block';
   document.getElementById('buybuttonImage').style.display = 'none';
   document.getElementById("availableButtonImage").style.display = 'block';
} else {
    document.getElementById('buybutton').style.display = 'block';
    document.getElementById("availableButton").style.display = 'none';
    document.getElementById('buybuttonImage').style.display = 'block';
    document.getElementById("availableButtonImage").style.display = 'none';
}
function moduleAvailable(state) 
{ 
  if(state) {
    document.getElementById('buybutton').style.display = 'none';
   document.getElementById("availableButton").style.display = 'block';
   document.getElementById('buybuttonImage').style.display = 'none';
   document.getElementById("availableButtonimage").style.display = 'block';
  }
} 
}



function deleteVar(name) 

{

    document.cookie = name + "=; expires=Thu, 01-Jan-70 00:00:01 GMT" + "; path=/";

} 



// Creates cookie

function setVar(name, value, expires) 

{ 

    document.cookie = name + "=" + escape(value) + "; path=/" + ((expires == null) ? "" : "; expires=" + expires.toGMTString()); 

}



// Checks cookie

function readVar(name)

{

    var fullName = name + "=";

    var val = 0;

    var strings = document.cookie.split(';');

    for(var i=0; i < strings.length; i++) 

    {

	    var str = strings[i];

	    while (str.charAt(0)==' ')

	        str = str.substring(1, str.length);

	    if (str.indexOf(fullName) == 0) 

	        val = parseInt(str.substring(fullName.length, str.length));

	    if (isNaN(val))

	        val = 0;    

    }

	return val;

}



// Alters cookie value

function varPlus1(name)

{

    var val = readVar(name);

    val += 1;

    setVar(name, val);

}



// Alters cookie value lower

function varMinus1(name)

{

    var val = readVar(name);

    val -= 1;

    setVar(name, val);

}



// Other disable back

function disallowNav()

{

    var disallowNav = 1;

   

    if (disallowNav)

    {

        document.oncontextmenu = blockContextMenu;

        document.onkeydown = blockKeyPresses;



        // This part works for IE, but not Firefox

        undoBack();

        // This extra part is need for Firefox

        window.onload = window.onload;undoBack();

        window.onpageshow = function(evt) { if(evt.persisted) undoBack() };

        window.onunload = function() { void(0) };

    }

}



// No back button

function undoBack()

{

    window.history.forward();

}



// No menu

function blockContextMenu()

{

	event.cancelBubble = true

   	event.returnValue = false;

  	return false;

}



// Backup no back

function blockKeyPresses() 

{

    var keyBackspace = 8;

    var keyF5 = 116;

    

	if ((event.keyCode == keyBackspace) || (event.keyCode == keyF5)) 

   	{

   	    event.keyCode = 0;

   	    event.returnValue = false;

   	}

}

///cookie value to max

function varPlus100(name)

{

    var val = readVar(name);

    val += 100;

    setVar(name, val);

}

//sets cookie value to beginning

function varPlus30(name)

{

    var val = readVar(name);

    val += 30;

    setVar(name, val);

}



//adds 5 to cookie value

function varPlus5(name)

{

    var val = readVar(name);

    val += 5;

    setVar(name, val);

}



//adds 6 to cookie value

function varPlus6(name)

{

    var val = readVar(name);

    val += 6;

    setVar(name, val);

}



//adds 7 to cookie value

function varPlus7(name)

{

    var val = readVar(name);

    val += 7;

    setVar(name, val);

}



//adds 2 to cookie value

function varPlus2(name)

{

    var val = readVar(name);

    val += 2;

    setVar(name, val);

}



//adds 3 to cookie value

function varPlus3(name)

{

    var val = readVar(name);

    val += 3;

    setVar(name, val);

}



//adds 4 to cookie value

function varPlus4(name)

{

    var val = readVar(name);

    val += 4;

    setVar(name, val);

}



//adds 8 to cookie value

function varPlus8(name)

{

    var val = readVar(name);

    val += 8;

    setVar(name, val);

}



//adds 9 to cookie value

function varPlus9(name)

{

    var val = readVar(name);

    val += 9;

    setVar(name, val);

}



//adds 10 to cookie value

function varPlus10(name)

{

    var val = readVar(name);

    val += 10;

    setVar(name, val);

}



//adds 12 to cookie value

function varPlus12(name)

{

    var val = readVar(name);

    val += 12;

    setVar(name, val);

}



//adds 14 to cookie value

function varPlus14(name)

{

    var val = readVar(name);

    val += 14;

    setVar(name, val);

}



//adds 15 to cookie value

function varPlus15(name)

{

    var val = readVar(name);

    val += 15;

    setVar(name, val);

}



//adds 20 to cookie value

function varPlus20(name)

{

    var val = readVar(name);

    val += 20;

    setVar(name, val);

}



//adds 40 to cookie value

function varPlus40(name)

{

    var val = readVar(name);

    val += 40;

    setVar(name, val);

}



// minus 2 cookie value

function varMinus2(name)

{

    var val = readVar(name);

    val -= 2;

    setVar(name, val);

}



// minus 3 cookie value

function varMinus3(name)

{

    var val = readVar(name);

    val -= 3;

    setVar(name, val);

}



// minus 4 cookie value

function varMinus4(name)

{

    var val = readVar(name);

    val -= 4;

    setVar(name, val);

}



// minus 5 cookie value

function varMinus5(name)

{

    var val = readVar(name);

    val -= 5;

    setVar(name, val);

}



// minus 10 cookie value

function varMinus10(name)

{

    var val = readVar(name);

    val -= 10;

    setVar(name, val);

}



// minus 20 cookie value

function varMinus20(name)

{

    var val = readVar(name);

    val -= 20;

    setVar(name, val);

}



// minus 30 cookie value

function varMinus30(name)

{

    var val = readVar(name);

    val -= 30;

    setVar(name, val);

}



// minus 40 cookie value

function varMinus40(name)

{

    var val = readVar(name);

    val -= 40;

    setVar(name, val);

}



// minus 50 cookie value

function varMinus50(name)

{

    var val = readVar(name);

    val -= 50;

    setVar(name, val);

}

// minus 50 cookie value

function varZero(name)

{

    var val = readVar(name);

    val = 0;

    setVar(name, val);

}