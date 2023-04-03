// displays solobar invite outcome

function outcome()

{

  var val = readVar("ch9solobar_invite");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch9soloach9.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch9soloach9_blank.jpg'>");

}

outcome();