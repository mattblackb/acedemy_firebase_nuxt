// displays achievement outcome

function outcome()

{

  var val = readVar("ch13dandb_cum_lick");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13didiach22.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13didiach22_blank.jpg'>");

}

outcome();