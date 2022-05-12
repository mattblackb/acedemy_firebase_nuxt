// displays bridgette convo outcome

function outcome()

{

  var val = readVar("ep1bridgette_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach36.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach36_blank.jpg'>");

}

outcome();