// displays achievement outcome

function outcome()

{

  var val = readVar("ch15holly_naked");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach21.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach21_blank.jpg'>");

}

outcome();