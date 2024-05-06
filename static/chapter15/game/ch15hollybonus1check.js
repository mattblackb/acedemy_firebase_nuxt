// displays achievement outcome

function outcome()

{

  var val = readVar("ch15holly_wave");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15hollybonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();