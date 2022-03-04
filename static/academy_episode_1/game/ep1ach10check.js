// displays media office outcome

function outcome()

{

  var val = readVar("ep1media_office");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach10.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach10_blank.jpg'>");

}

outcome();