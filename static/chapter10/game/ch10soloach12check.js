// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solomovie_lola");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach12.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach12_blank.jpg'>");

}

outcome();