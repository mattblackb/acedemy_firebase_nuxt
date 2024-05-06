// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach8.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach8_blank.jpg'>");

}

outcome();