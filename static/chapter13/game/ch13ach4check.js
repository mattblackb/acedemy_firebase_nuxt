// displays achievement outcome

function outcome()

{

  var val = readVar("ch13end_drunk");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach4_blank.jpg'>");

}

outcome();