// displays achievement outcome

function outcome()

{

  var val = readVar("ch15sebastian_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach32.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach32_blank.jpg'>");

}

outcome();