// displays achievement outcome

function outcome()

{

  var val = readVar("ch13dandb_cum_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13didiach21.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13didiach21_blank.jpg'>");

}

outcome();