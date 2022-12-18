// displays annie message outcome

function outcome()

{

  var val = readVar("ch6annie_message");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch6ach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch6ach2_blank.jpg'>");

}

outcome();