// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solomovie_vip");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach4_blank.jpg'>");

}

outcome();