// displays chapter seven complete outcome

function outcome()

{

  var val = readVar("ch7_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch7_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch7_locked.jpg'>");

}

outcome();