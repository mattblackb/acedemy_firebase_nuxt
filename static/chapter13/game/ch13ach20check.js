// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_cowgirl_tits");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach20.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach20_blank.jpg'>");

}

outcome();