// displays chapter complete outcome

function outcome()

{

  var val = readVar("ch16_complete");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/banner_ch16_1_unlocked_beta.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/banner_ch16_1_locked_beta.jpg'>");

}

outcome();