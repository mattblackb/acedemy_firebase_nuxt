// displays achievement outcome

function outcome()

{

  var val = readVar("ch16meet_candidates");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch16ach24_1.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch16ach24_2.jpg'>");
	
	else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach24_blank.jpg'>");

}

outcome();