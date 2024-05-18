// displays achievement outcome

function outcome()

{

  var val = readVar("ch15visit_park");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach11.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach11_blank.jpg'>");

}

outcome();