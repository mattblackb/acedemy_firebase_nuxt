// displays achievement outcome

function outcome()

{

  var val = readVar("ch12vixen_extra");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12vixenach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();