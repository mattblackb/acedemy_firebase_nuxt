// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_cum_cleanup");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch15anniebonus19_1.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch15anniebonus19_2.jpg'>");
	
	else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();