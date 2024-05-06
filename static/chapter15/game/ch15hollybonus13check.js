// displays achievement outcome

function outcome()

{

  var val = readVar("ch15holly_cum_doggy");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch15hollybonus13_1.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch15hollybonus13_2.jpg'>");
	
	else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();