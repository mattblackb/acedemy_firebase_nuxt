// displays achievement outcome

function outcome()

{

  var val = readVar("ch11alicia_dance");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach30.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach30_blank.jpg'>");

}

outcome();