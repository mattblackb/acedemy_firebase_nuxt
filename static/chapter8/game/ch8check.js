// displays chapter eight complete outcome

function outcome()

{

  var val = readVar("ch8_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch8_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch8_locked.jpg'>");

}

outcome();