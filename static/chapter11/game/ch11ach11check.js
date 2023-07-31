// displays achievement outcome

function outcome()

{

  var val = readVar("ch11kiss_dance");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach11.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach11_blank.jpg'>");

}

outcome();