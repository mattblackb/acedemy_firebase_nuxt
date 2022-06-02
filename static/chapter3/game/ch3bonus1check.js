// displays bridgette bonus outcome

function outcome()

{

  var val = readVar("ch3bridgette_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch3bonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch3bonus1_blank.jpg'>");

}

outcome();