// displays achievement outcome

function outcome()

{

  var val = readVar("ch15holly_more_wave");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15hollybonus24.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();