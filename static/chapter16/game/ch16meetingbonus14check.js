 // displays achievement outcome

function outcome()

{

  var val = readVar("ch16meetingbonus_success");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16meetingbonus14.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();