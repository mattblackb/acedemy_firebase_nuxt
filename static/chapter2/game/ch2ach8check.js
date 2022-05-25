// displays cctv enabled outcome

function outcome()

{

  var val = readVar("cctv_enabled");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch2ach8.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch2ach8_blank.jpg'>");

}

outcome();