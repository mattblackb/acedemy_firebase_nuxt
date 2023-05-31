// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10lolaview_naked");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach16.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach16_blank.jpg'>");

}

outcome();