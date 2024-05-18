// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_cum_mouth");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15anniebonus13.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();