// displays chapter complete outcome

function outcome()

{

  var val = readVar("ch15_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch15_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch15_locked.jpg'>");

}

outcome();