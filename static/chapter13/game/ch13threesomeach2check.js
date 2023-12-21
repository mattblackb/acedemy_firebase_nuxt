// displays achievement outcome

function outcome()

{

  var val = readVar("ch13threesome_watch");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13threesomeach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13threesomeach2_blank.jpg'>");

}

outcome();