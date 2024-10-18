// displays achievement outcome

function outcome()

{

  var val = readVar("ch16meetingbonus_stroke_stop");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16meetingbonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();