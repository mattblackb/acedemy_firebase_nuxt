// displays achievement outcome

function outcome()

{

  var val = readVar("ch13didi_performance");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13didiach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13didiach4_blank.jpg'>");

}

outcome();