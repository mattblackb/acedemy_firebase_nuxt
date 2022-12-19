// displays ch7_bonus achievement outcome

function outcome()

{

  var val = readVar("ch7bridgette_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch7bonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch7bonus1_blank.jpg'>");

}

outcome();