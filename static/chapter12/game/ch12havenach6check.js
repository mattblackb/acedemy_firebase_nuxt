// displays achievement outcome

function outcome()

{

  var val = readVar("ch12haven_lick");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12havenach6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();