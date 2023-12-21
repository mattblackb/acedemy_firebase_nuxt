// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_doggy");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach22.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach22_blank.jpg'>");

}

outcome();