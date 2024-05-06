// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_drive");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach6_blank.jpg'>");

}

outcome();