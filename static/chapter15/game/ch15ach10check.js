// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_ride");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach10.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach10_blank.jpg'>");

}

outcome();