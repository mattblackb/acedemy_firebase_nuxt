// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solomovie_message");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach11.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach11_blank.jpg'>");

}

outcome();