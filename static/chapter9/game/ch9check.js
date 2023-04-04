// displays chapter nine complete outcome

function outcome()

{

  var val = readVar("ch9_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch9_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch9_locked.jpg'>");

}

outcome();