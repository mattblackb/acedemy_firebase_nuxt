// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solomovie_girls");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach7.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach7_blank.jpg'>");

}

outcome();