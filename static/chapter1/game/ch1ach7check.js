// displays girls intro outcome

function outcome()

{

  var val = readVar("ch1intro_girls");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch1ach7.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch1ach7_blank.jpg'>");

}

outcome();