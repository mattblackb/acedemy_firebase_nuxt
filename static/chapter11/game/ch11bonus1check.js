// displays alicia bonus outcome

function outcome()

{

  var val = readVar("ch11alicia_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11bonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11bonus1_blank.jpg'>");

}

outcome();