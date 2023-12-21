// displays achievement outcome

function outcome()

{

  var val = readVar("ch13didi_decline");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13didiach6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13didiach6_blank.jpg'>");

}

outcome();