// displays annie suggestion in studio outcome

function outcome()

{

  var val = readVar("ch3annie_suggestion");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch3ach21.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch3ach21_blank.jpg'>");

}

outcome();