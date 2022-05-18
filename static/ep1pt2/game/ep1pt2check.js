// displays episode one part two complete outcome

function outcome()

{

  var val = readVar("ep1pt2_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ep1pt2_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ep1pt2_locked.jpg'>");

}

outcome();