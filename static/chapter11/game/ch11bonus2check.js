// displays laura bonus outcome

function outcome()

{

  var val = readVar("ch11laura_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11bonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11bonus2_blank.jpg'>");

}

outcome();