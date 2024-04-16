// displays possession outcome

function outcome()

{

  var val = readVar("ch15have_briefcase");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15possession3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15possession3_blank.jpg'>");

}

outcome();