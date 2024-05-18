// displays possession outcome

function outcome()

{

  var val = readVar("ch15have_package");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15possession5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15possession5_blank.jpg'>");

}

outcome();