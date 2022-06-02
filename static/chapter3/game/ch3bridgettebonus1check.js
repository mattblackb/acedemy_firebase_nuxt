// displays bridgette bonus outcome

function outcome()

{

  var val = readVar("ch3bridgette_photos");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch3bridgettebonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();