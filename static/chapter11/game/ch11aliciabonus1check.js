// displays alicia bonus outcome

function outcome()

{

  var val = readVar("ch11alicia_stroke");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11aliciabonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();