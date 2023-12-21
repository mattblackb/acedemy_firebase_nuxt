// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_invite");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach11.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach11_blank.jpg'>");

}

outcome();