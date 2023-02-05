
//MB Added post message
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

function setCookiesOnEntry() {
	var allVars = getUrlVars();
    // console.log('allVars',allVars);
	if(allVars){

	//set cookies to passed variables

	Object.keys(allVars).map(cookie =>{
        console.log('cookie',cookie, allVars[cookie]);
		setCookie(cookie,allVars[cookie],1)
	})

	}
} 



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
    

function saveProgress(){
    var myCookies = getCookies(); //GET JSON ARRAY
    myCookiesJSON = JSON.stringify(myCookies);
    let returnedState = parent.c_1.saveProgress(myCookiesJSON)
    return returnedState
}

// Kills cookie
function deleteVar(name) 

{
    document.cookie = name + "=; expires=Thu, 01-Jan-70 00:00:01 GMT" + "; path=/";

} 

function hideShowButton() {
    let showcontinue = checkAvailable('4AFKHcxCpk3t7QsbIQqL');
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