// displays achievement outcome

function outcome()

{

  var val = readVar("ch11bridgette_exit");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach15.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach15_blank.jpg'>");

}

outcome();