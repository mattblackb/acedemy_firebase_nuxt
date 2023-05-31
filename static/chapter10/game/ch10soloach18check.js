// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10lola_ride");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach18.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach18_blank.jpg'>");

}

outcome();