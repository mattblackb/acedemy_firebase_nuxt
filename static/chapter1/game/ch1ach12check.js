// displays cctv1 unlock outcome

function outcome()

{

  var val = readVar("cctv1_unlock");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch1ach12.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch1ach12_blank.jpg'>");

}

outcome();