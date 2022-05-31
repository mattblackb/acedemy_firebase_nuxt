// displays bridgette intro outcome

function outcome()

{

  var val = readVar("ch1intro_bridgette");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch1ach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch1ach2_blank.jpg'>");

}

outcome();