// displays achievement outcome

function outcome()

{

  var val = readVar("ch13all_cum_share");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13threesomeach28.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13threesomeach28_blank.jpg'>");

}

outcome();