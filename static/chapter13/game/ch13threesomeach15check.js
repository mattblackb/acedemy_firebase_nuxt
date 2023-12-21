// displays achievement outcome

function outcome()

{

  var val = readVar("ch13threesome_didi_clean");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13threesomeach15.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13threesomeach15_blank.jpg'>");

}

outcome();