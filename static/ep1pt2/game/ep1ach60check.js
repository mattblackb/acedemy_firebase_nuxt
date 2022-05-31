// displays annie ride home outcome

function outcome()

{

  var val = readVar("ep1annie_ride");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach60.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach60_blank.jpg'>");

}

outcome();