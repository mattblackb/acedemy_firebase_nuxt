// displays alicia bonus outcome

function outcome()

{

  var val = readVar("ch11alicia_watch");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11aliciabonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();