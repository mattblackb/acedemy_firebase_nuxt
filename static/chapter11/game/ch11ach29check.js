// displays achievement outcome

function outcome()

{

  var val = readVar("ch11laura_positive");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach29.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach29_blank.jpg'>");

}

outcome();