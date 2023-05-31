// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10lolaview_secret");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach15.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach15_blank.jpg'>");

}

outcome();