// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_reject");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach4_blank.jpg'>");

}

outcome();