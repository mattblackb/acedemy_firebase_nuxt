// displays chapter thirteen complete outcome

function outcome()

{

  var val = readVar("ch13_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch13_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch13_locked.jpg'>");

}

outcome();