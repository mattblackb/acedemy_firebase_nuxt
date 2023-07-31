// displays achievement outcome

function outcome()

{

  var val = readVar("ch11brass_aands");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach22.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach22_blank.jpg'>");

}

outcome();