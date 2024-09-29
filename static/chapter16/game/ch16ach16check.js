// displays achievement outcome

function outcome()

{

  var val = readVar("ch16twins_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach16.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach16_blank.jpg'>");

}

outcome();