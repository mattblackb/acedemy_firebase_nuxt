// displays annie message outcome

function outcome()

{

  var val = readVar("ch6annie_message");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch6ach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch6ach1_blank.jpg'>");

}

outcome();