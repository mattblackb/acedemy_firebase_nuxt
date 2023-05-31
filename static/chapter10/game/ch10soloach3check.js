// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solomovie_amber");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach3_blank.jpg'>");

}

outcome();