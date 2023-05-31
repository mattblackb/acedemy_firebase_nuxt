// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solostreet_olivia");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach20.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach20_blank.jpg'>");

}

outcome();