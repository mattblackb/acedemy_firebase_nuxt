// displays achievement outcome

function outcome()

{

  var val = readVar("ch12street_walk");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch12ach26_1.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch12ach26_2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach26_blank.jpg'>");

}

outcome();