// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_continue");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach5_blank.jpg'>");

}

outcome();