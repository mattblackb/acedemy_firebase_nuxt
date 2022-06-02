// displays cctv2 unlock outcome

function outcome()

{

  var val = readVar("cctv2_unlock");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach13.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach13_blank.jpg'>");

}

outcome();