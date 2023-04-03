// displays apartment invite outcome

function outcome()

{

  var val = readVar("ch9home_invite");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch9ach22.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch9ach22_blank.jpg'>");

}

outcome();