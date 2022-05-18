// displays didi intro outcome

function outcome()

{

  var val = readVar("ep1intro_didi");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach5_blank.jpg'>");

}

outcome();