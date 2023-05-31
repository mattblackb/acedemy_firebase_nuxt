// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solomovie_visit");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach2_blank.jpg'>");

}

outcome();