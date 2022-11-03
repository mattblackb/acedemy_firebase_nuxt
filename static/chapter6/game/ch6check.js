// displays chapter six complete outcome

function outcome()

{

  var val = readVar("ch6_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch6_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch6_locked.jpg'>");

}

outcome();