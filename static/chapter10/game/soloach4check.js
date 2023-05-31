// displays solo movie vip tickets outcome

function outcome()

{

  var val = readVar("solo_vip");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/soloach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/soloach4_blank.jpg'>");

}

outcome();