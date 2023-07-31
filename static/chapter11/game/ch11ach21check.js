// displays achievement outcome

function outcome()

{

  var val = readVar("ch11brass_sandf");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach21.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach21_blank.jpg'>");

}

outcome();