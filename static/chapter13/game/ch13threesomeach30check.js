// displays achievement outcome

function outcome()

{

  var val = readVar("ch13threesome_positive");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13threesomeach30.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13threesomeach30_blank.jpg'>");

}

outcome();