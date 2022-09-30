// displays annie_message outcome

function outcome()

{

  var val = readVar("ch5annie_message");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch5ach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch5ach5_blank.jpg'>");

}

outcome();