// displays viewpoint flash outcome

function outcome()

{

  var val = readVar("ch10view_flash");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10ach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10ach5_blank.jpg'>");

}

outcome();