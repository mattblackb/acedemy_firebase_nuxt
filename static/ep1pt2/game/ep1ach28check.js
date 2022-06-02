// displays cctv enabled outcome

function outcome()

{

  var val = readVar("cctv_enabled");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach28.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach28_blank.jpg'>");

}

outcome();