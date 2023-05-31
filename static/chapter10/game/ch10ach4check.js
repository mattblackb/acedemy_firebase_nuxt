// displays viewpoint kiss outcome

function outcome()

{

  var val = readVar("ch10view_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10ach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10ach4_blank.jpg'>");

}

outcome();