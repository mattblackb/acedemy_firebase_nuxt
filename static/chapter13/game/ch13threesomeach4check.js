// displays achievement outcome

function outcome()

{

  var val = readVar("ch13threesome_behind");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13threesomeach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13threesomeach4_blank.jpg'>");

}

outcome();