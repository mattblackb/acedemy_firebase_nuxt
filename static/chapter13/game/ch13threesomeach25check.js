// displays achievement outcome

function outcome()

{

  var val = readVar("ch13threesome_bonus_orgasm");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13threesomeach25.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13threesomeach25_blank.jpg'>");

}

outcome();