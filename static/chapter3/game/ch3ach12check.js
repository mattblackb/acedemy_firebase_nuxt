// displays punctual to studio session outcome

function outcome()

{

  var val = readVar("ch3studio_punctual");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch3ach12.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch3ach12_blank.jpg'>");

}

outcome();