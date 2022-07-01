// displays Chapter Four part one complete outcome

function outcome()

{

  var val = readVar("ch4_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch4_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch4_locked.jpg'>");

}

outcome();