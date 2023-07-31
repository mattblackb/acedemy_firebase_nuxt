// displays achievement outcome

function outcome()

{

  var val = readVar("ch11bridgette_dance");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach8.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach8_blank.jpg'>");

}

outcome();