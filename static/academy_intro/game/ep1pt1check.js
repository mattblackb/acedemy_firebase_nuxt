// displays episode one part one complete outcome

function outcome()

{

  var val = readVar("ep1pt1_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1pt1_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1pt1_locked.jpg'>");

}

outcome();