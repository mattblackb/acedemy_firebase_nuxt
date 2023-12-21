// displays achievement outcome

function outcome()

{

  var val = readVar("ch13threesome_didi_taste");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13threesomeach6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13threesomeach6_blank.jpg'>");

}

outcome();