// displays chapter twelve complete outcome

function outcome()

{

  var val = readVar("ch12_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch12_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch12_locked.jpg'>");

}

outcome();