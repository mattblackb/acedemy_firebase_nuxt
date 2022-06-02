// displays flirt with Bridgette outcome

function outcome()

{

  var val = readVar("ch1flirt_bridgette");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch1ach20.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch1ach20_blank.jpg'>");

}

outcome();