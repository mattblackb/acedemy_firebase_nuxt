// displays bridgette_bonus outcome

function outcome()

{

  var val = readVar("ch6bridgette_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch6bonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch6bonus2_blank.jpg'>");

}

outcome();