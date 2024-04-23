// displays player's name



function myname2()

{


var username = GetCookie('playername');



function getCookieVal (offset) {

   var endstr = document.cookie.indexOf (";", offset);

   if (endstr == -1)

      endstr = document.cookie.length;

   return unescape(document.cookie.substring(offset, endstr));

}

function GetCookie (name) {

       return parent.c_1.getPlayerName()

}



document.write(' '+username);





}

myname2();