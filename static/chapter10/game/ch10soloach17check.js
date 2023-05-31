// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10lolaview_invite");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach17.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach17_blank.jpg'>");

}

outcome();