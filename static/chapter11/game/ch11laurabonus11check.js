// displays laura bonus outcome

function outcome()

{

  var val = readVar("ch11laura_stay_naked");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11laurabonus11.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();