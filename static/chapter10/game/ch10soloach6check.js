// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solomovie_office");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach6_blank.jpg'>");

}

outcome();