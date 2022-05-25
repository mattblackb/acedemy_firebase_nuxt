// displays episode one part one complete outcome

function outcome()

{

  var val = readVar("chapter1_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/chapter1_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/chapter1_locked.jpg'>");

}

outcome();