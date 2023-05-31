// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solomovie_waiting");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach13.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach13_blank.jpg'>");

}

outcome();