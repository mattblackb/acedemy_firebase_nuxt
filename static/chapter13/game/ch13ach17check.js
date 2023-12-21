// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_push");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach17.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach17_blank.jpg'>");

}

outcome();