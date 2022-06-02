// displays Chapter Two complete outcome

function outcome()

{

  var val = readVar("ch2_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch2_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch2_locked.jpg'>");

}

outcome();