// displays achievement outcome

function outcome()

{

  var val = readVar("ch16punch_ramsey");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch16ach46_1.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch16ach46_2.jpg'>");
	
	else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach46_blank.jpg'>");

}

outcome();