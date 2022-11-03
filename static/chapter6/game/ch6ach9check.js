// displays bridgette cctv outcome

function outcome()

{

  var val = readVar("ch6bridgette_cctv");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch6ach9.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch6ach9_blank.jpg'>");

}

outcome();