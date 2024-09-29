// displays achievement outcome

function outcome()

{

  var val = readVar("ch16olivia_together");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch16ach9_1.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch16ach9_2.jpg'>");
	
	else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach9_blank.jpg'>");

}

outcome();