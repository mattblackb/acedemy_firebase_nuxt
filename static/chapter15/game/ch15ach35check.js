// displays achievement outcome

function outcome()

{

  var val = readVar("ch15leave_message");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach35.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach35_blank.jpg'>");

}

outcome();