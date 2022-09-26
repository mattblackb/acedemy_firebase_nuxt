// displays morning_meeting outcome

function outcome()

{

  var val = readVar("ch5morning_meeting");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch5ach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch5ach4_blank.jpg'>");

}

outcome();