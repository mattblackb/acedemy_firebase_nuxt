// displays achievement outcome

function outcome()

{

  var val = readVar("ch12home_invite");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch12ach30_1.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch12ach30_2.jpg'>");
	
	else
		
	if ((val > 2)&&(val < 4))

        document.write("<img src='buttonsetc/endcards/ch12ach30_3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach30_blank.jpg'>");

}

outcome();