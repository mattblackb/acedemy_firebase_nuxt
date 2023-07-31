// displays achievement outcome

function outcome()

{

  var val = readVar("ch11bridgette_more");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach9.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach9_blank.jpg'>");

}

outcome();