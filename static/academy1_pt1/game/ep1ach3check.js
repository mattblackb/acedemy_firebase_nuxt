// displays jodie intro outcome

function outcome()

{

  var val = readVar("ep1intro_jodie");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach3_blank.jpg'>");

}

outcome();