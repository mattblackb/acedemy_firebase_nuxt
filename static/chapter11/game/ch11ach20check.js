// displays achievement outcome

function outcome()

{

  var val = readVar("ch11brass_vodka");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach20.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach20_blank.jpg'>");

}

outcome();