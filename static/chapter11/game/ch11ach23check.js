// displays achievement outcome

function outcome()

{

  var val = readVar("ch11caitlin_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach23.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach23_blank.jpg'>");

}

outcome();