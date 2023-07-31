// displays achievement outcome

function outcome()

{

  var val = readVar("ch11alicia_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach40.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach40_blank.jpg'>");

}

outcome();