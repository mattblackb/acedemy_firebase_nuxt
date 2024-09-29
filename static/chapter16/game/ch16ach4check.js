// displays achievement outcome

function outcome()

{

  var val = readVar("ch16meeting_touch");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach4_blank.jpg'>");

}

outcome();