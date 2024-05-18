// displays achievement outcome

function outcome()

{

  var val = readVar("ch15genevieve_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach31.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach31_blank.jpg'>");

}

outcome();