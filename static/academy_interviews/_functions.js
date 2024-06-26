// Function for OFFLINE

// Kills cookie

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

//adds 1 to cookie value

function varPlus1(name)

{

    var val = readVar(name);

    val += 1;

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


//adds 11 to cookie value

function varPlus11(name)

{

    var val = readVar(name);

    val += 11;

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


//adds 30 to cookie value

function varPlus30(name)

{

    var val = readVar(name);

    val += 30;

    setVar(name, val);

}


//adds 40 to cookie value

function varPlus40(name)

{

    var val = readVar(name);

    val += 40;

    setVar(name, val);

}


//adds 50 to cookie value

function varPlus50(name)

{

    var val = readVar(name);

    val += 50;

    setVar(name, val);

}


//adds 60 to cookie value

function varPlus60(name)

{

    var val = readVar(name);

    val += 60;

    setVar(name, val);

}


//adds 70 to cookie value

function varPlus70(name)

{

    var val = readVar(name);

    val += 70;

    setVar(name, val);

}


//adds 80 to cookie value

function varPlus80(name)

{

    var val = readVar(name);

    val += 80;

    setVar(name, val);

}


//adds 90 to cookie value

function varPlus90(name)

{

    var val = readVar(name);

    val += 90;

    setVar(name, val);

}


//add 100 to cookie value

function varPlus100(name)

{

    var val = readVar(name);

    val += 100;

    setVar(name, val);

}


// minus 1 cookie value

function varMinus1(name)

{

    var val = readVar(name);

    val -= 1;

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


// minus 60 cookie value

function varMinus60(name)

{

    var val = readVar(name);

    val -= 60;

    setVar(name, val);

}


// minus 70 cookie value

function varMinus70(name)

{

    var val = readVar(name);

    val -= 70;

    setVar(name, val);

}


// minus 80 cookie value

function varMinus80(name)

{

    var val = readVar(name);

    val -= 80;

    setVar(name, val);

}


// minus 90 cookie value

function varMinus90(name)

{

    var val = readVar(name);

    val -= 90;

    setVar(name, val);

}


// minus 100 cookie value

function varMinus100(name)

{

    var val = readVar(name);

    val -= 100;

    setVar(name, val);

}


// minus 200 cookie value

function varMinus200(name)

{

    var val = readVar(name);

    val -= 200;

    setVar(name, val);

}


// minus 300 cookie value

function varMinus300(name)

{

    var val = readVar(name);

    val -= 300;

    setVar(name, val);

}


// minus 400 cookie value

function varMinus400(name)

{

    var val = readVar(name);

    val -= 400;

    setVar(name, val);

}


// minus 500 cookie value

function varMinus500(name)

{

    var val = readVar(name);

    val -= 500;

    setVar(name, val);

}


// zero cookie value

function varZero(name)

{

    var val = readVar(name);

    val = 0;

    setVar(name, val);

}