// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10lolaview_visit");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach14.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach14_blank.jpg'>");

}

outcome();