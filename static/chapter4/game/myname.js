// displays player's name



function myname2()

{



var username = "";



function getCookieVal (offset) {

   var endstr = document.cookie.indexOf (";", offset);

   if (endstr == -1)

      endstr = document.cookie.length;

   return unescape(document.cookie.substring(offset, endstr));

}

function GetCookie (name) {

        var arg = name + "=";

        var alen = arg.length;

        var clen = document.cookie.length;

        var i = 0;

        while (i < clen) {

                var j = i + alen;

                if (document.cookie.substring(i, j) == arg)

                        return getCookieVal (j);

                i = document.cookie.indexOf(" ", i) + 1;

                        if (i == 0)

                                break;

                }

   return null;

}



document.write(' '+username);





}

myname2();