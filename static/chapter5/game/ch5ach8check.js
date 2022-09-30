// displays cctv4_unlock outcome

function outcome()

{

  var val = readVar("cctv4_unlock");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch5ach8.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch5ach8_blank.jpg'>");

}

outcome();