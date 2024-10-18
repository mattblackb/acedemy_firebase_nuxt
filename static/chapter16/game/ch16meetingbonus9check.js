// displays achievement outcome

function outcome()

{

  var val = readVar("ch16meetingbonus_oral_cum");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch16meetingbonus9_1.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch16meetingbonus9_2.jpg'>");
	
	else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();