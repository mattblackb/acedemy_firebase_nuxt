// displays laura bonus outcome

function outcome()

{

  var val = readVar("ch11laura_bed");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11laurabonus12.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();