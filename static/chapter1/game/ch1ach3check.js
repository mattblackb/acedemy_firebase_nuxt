// displays jodie intro outcome

function outcome()

{

  var val = readVar("ch1intro_jodie");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch1ach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch1ach3_blank.jpg'>");

}

outcome();