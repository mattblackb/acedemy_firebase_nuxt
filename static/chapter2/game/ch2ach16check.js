// displays bridgette convo outcome

function outcome()

{

  var val = readVar("ch2bridgette_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch2ach16.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch2ach16_blank.jpg'>");

}

outcome();