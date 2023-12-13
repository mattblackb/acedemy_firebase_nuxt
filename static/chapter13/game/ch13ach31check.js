// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_facing");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach31.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach31_blank.jpg'>");

}

outcome();