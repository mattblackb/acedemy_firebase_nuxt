// displays achievement outcome

function outcome()

{

  var val = readVar("ch12haven_swallow");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12havenach9.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();