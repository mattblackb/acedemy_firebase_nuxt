// displays episode one part two complete outcome

function outcome()

{

  var val = readVar("chapter2_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_chapter2_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_chapter2_locked.jpg'>");

}

outcome();