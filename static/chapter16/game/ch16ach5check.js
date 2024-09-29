// displays achievement outcome

function outcome()

{

  var val = readVar("ch16meeting_stroke");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach5_blank.jpg'>");

}

outcome();