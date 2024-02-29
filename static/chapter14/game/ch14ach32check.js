// displays achievement outcome

function outcome()

{

  var val = readVar("ch14help_progress");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch14ach32_1.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch14ach32_2.jpg'>");
	
	else
		
	if ((val > 2)&&(val < 4))

        document.write("<img src='buttonsetc/endcards/ch14ach32_3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach32_blank.jpg'>");

}

outcome();