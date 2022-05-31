// displays cctv unlock three outcome

function outcome()

{

  var val = readVar("cctv3_unlock");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch3ach10.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch3ach10_blank.jpg'>");

}

outcome();