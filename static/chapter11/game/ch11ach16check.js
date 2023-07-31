// displays achievement outcome

function outcome()

{

  var val = readVar("ch11strippers_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach16.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach16_blank.jpg'>");

}

outcome();