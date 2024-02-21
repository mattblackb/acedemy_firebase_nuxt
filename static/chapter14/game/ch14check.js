// displays chapter complete outcome

function outcome()

{

  var val = readVar("ch14_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch14_unlocked.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch14_locked.jpg'>");

}

outcome();