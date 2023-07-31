// displays achievement outcome

function outcome()

{

  var val = readVar("ch11alicia_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach48.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach48_blank.jpg'>");

}

outcome();