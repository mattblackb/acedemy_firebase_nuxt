// displays achievement outcome

function outcome()

{

  var val = readVar("ch12haven_extra");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12havenach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();