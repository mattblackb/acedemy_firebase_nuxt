// displays achievement outcome

function outcome()

{

  var val = readVar("ch11caitlin_drink");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach24.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach24_blank.jpg'>");

}

outcome();