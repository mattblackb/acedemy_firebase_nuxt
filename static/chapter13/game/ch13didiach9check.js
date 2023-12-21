// displays achievement outcome

function outcome()

{

  var val = readVar("ch13didi_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13didiach9.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13didiach9_blank.jpg'>");

}

outcome();