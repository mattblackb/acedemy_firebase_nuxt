// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_spit");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach15.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach15_blank.jpg'>");

}

outcome();