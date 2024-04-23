// displays achievement outcome

function outcome()

{

  var val = readVar("ch15amy_reverse");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15amybonus3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();