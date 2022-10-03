// displays player's name



// function myname2()

// {



function GetCookie (name) {

        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));

        if (match)    document.write(' '+match[2]);


}








// }

// myname2();