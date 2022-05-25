// displays Chapter One complete outcome

function outcome()

{

  var val = readVar("ch1_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch1_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch1_locked.jpg'>");

}

outcome();