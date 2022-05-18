// displays talk to megan outcome

function outcome()

{

  var val = readVar("ep1talk_megan");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach17.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach17_blank.jpg'>");

}

outcome();