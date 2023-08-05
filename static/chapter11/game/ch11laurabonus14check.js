// displays laura bonus outcome

function outcome()

{

  var val = readVar("ch11laura_sleep");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11laurabonus14.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();