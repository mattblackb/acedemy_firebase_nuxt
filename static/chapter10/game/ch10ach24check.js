// displays didi_invite outcome

function outcome()

{

  var val = readVar("ch10didi_invite");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10ach24.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10ach24_blank.jpg'>");

}

outcome();