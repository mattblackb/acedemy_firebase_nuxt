// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_ride");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach37.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach37_blank.jpg'>");

}

outcome();