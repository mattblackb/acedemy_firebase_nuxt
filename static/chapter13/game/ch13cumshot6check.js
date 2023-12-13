// displays achievement outcome

function outcome()

{

  var val = readVar("ch13cum_cowgirl");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch13cumshot6_1.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch13cumshot6_2.jpg'>");
	
	else
	
	    document.write("<img src='buttonsetc/endcards/ch13cumshot6_blank.jpg'>");

}

outcome();