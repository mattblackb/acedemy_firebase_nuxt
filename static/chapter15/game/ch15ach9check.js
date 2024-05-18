// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_abandoned");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach9.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach9_blank.jpg'>");

}

outcome();