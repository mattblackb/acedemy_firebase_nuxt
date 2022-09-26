
var getCookiesSetRandom = function(url){
	// let cookieArr = ['rollup_ga_F1G3E656YZ',"_gac_UA-37952868-41","1279799279", "_gac_UA-37952868-51", "_hp2_props.1279799279", "ajs_anonymous_id", "ajs_user_id", "ga_Rollup_gid", "_fbp", "_ga", "notice_gdpr_prefs", "_gcl_au", "rollup_ga", "notice_behavior", "optimizelyEndUserId", "_fcdscst", "_gcl_aw", "ga_Rollup", "_gid", "_fcdscv", "user", "OptanonConsent"]
	  var pairs = document.cookie.split(";");
	  var cookies = {};
	  for (var i=0; i<pairs.length; i++){
		var pair = pairs[i].split("=");
        console.log(pair);
        var date = new Date();
		date.setTime(date.getTime()+(2*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
        var cookieName = pair[0];
        var cookieValue = getRandomInt();
        document.cookie = cookieName+"="+cookieValue+expires+"; path=/";
	  }
	  // window.top.location.href ="/save/"+url+"/"+cookies; 
	  return cookies;
	}

    //function to return random 0 or 1
    function getRandomInt() {
        return Math.floor(Math.random() * 2);
    }

    var allCookies = getCookiesSetRandom(window.location.pathname);
    console.log('Cookies', allCookies);

    