// displays didi intro outcome

function outcome()

{

  var val = readVar("ch1intro_didi");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch1ach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch1ach5_blank.jpg'>");

}

outcome();