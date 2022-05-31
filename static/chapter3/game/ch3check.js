// displays Chapter Three part one complete outcome

function outcome()

{

  var val = readVar("ch3_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch3_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch3_locked.jpg'>");

}

outcome();