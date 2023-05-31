// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solomovie_wisp");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach5_blank.jpg'>");

}

outcome();