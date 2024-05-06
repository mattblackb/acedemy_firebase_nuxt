// displays achievement outcome

function outcome()

{

  var val = readVar("ch15holly_reject");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach23.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach23_blank.jpg'>");

}

outcome();