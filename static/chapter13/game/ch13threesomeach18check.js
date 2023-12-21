// displays achievement outcome

function outcome()

{

  var val = readVar("ch13threesome_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13threesomeach18.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13threesomeach18_blank.jpg'>");

}

outcome();