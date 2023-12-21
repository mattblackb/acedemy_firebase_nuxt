// displays achievement outcome

function outcome()

{

  var val = readVar("ch13shower_doggy");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach10.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach10_blank.jpg'>");

}

outcome();