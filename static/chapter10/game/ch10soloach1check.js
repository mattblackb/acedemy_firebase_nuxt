// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10soloview_visit");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach1_blank.jpg'>");

}

outcome();