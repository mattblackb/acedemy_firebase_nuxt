// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bridgette_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13bonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13bonus1_blank.jpg'>");

}

outcome();