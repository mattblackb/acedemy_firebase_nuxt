// displays achievement outcome

function outcome()

{

  var val = readVar("ch12haven_suck");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12havenach7.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();