// displays ch7_achievement outcome

function outcome()

{

  var val = readVar("ch7archive_invite");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch7ach50.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch7ach50_blank.jpg'>");

}

outcome();