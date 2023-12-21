// displays achievement outcome

function outcome()

{

  var val = readVar("ch13didi_visit");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13didiach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13didiach1_blank.jpg'>");

}

outcome();