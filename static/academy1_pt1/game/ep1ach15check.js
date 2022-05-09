// displays Jodie media outcome

function outcome()

{

  var val = readVar("ep1jodie_media");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach15.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach15_blank.jpg'>");

}

outcome();