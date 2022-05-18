// displays bridgette intro outcome

function outcome()

{

  var val = readVar("ep1intro_bridgette");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach2_blank.jpg'>");

}

outcome();