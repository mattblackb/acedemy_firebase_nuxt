// displays achievement outcome

function outcome()

{

  var val = readVar("ch15holly_continue");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach15.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach15_blank.jpg'>");

}

outcome();