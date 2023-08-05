// displays laura bonus outcome

function outcome()

{

  var val = readVar("ch11laura_push_suck");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11laurabonus5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();