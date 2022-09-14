// displays chapter five complete outcome

function outcome()

{

  var val = readVar("ch5_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch5_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch5_locked.jpg'>");

}

outcome();