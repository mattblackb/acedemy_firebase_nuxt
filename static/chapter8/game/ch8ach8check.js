// displays party_invite outcome

function outcome()

{

  var val = readVar("ch8party_invite");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch8ach8.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch8ach8_blank.jpg'>");

}

outcome();