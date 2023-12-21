// displays achievement outcome

function outcome()

{

  var val = readVar("ch13dandb_cum");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13didiach20.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13didiach20_blank.jpg'>");

}

outcome();