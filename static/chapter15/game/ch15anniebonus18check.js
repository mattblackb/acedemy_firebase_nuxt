// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_cum_facial");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch15anniebonus18_1.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch15anniebonus18_2.jpg'>");
	
	else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();