// displays chapter complete outcome

function outcome()

{

  var val = readVar("ch11_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch11_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch11_locked.jpg'>");

}

outcome();