// displays girls intro outcome

function outcome()

{

  var val = readVar("ep1intro_girls");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach7.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach7_blank.jpg'>");

}

outcome();