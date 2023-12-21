// displays achievement outcome

function outcome()

{

  var val = readVar("ch13didi_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13bonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13bonus2_blank.jpg'>");

}

outcome();