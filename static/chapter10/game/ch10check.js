// displays chapter ten complete outcome

function outcome()

{

  var val = readVar("ch10_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch10_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch10_locked.jpg'>");

}

outcome();