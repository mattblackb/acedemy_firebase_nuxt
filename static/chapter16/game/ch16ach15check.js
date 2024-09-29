// displays achievement outcome

function outcome()

{

  var val = readVar("ch16staff_unlocked");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach15.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach15_blank.jpg'>");

}

outcome();