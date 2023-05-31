// displays viewpoint hide outcome

function outcome()

{

  var val = readVar("ch10view_hide");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10ach8.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10ach8_blank.jpg'>");

}

outcome();