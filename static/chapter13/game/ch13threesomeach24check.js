// displays achievement outcome

function outcome()

{

  var val = readVar("ch13threesome_finale");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13threesomeach24.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13threesomeach24_blank.jpg'>");

}

outcome();