// displays achievement outcome

function outcome()

{

  var val = readVar("ch13threesome_upset");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13threesomeach10.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13threesomeach10_blank.jpg'>");

}

outcome();