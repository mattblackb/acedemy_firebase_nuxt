// displays achievement outcome

function outcome()

{

  var val = readVar("ch11alicia_vodka");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach25.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach25_blank.jpg'>");

}

outcome();