// displays intro episode complete outcome

function outcome()

{

  var val = readVar("intro_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_intro_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_intro_locked.jpg'>");

}

outcome();