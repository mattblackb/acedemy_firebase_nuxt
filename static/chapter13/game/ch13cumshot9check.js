// displays achievement outcome

function outcome()

{

  var val = readVar("ch13cum_facing");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13cumshot9.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13cumshot9_blank.jpg'>");

}

outcome();