// displays solo viewpoint visit outcome

function outcome()

{

  var val = readVar("solo_view");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/soloach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/soloach1_blank.jpg'>");

}

outcome();