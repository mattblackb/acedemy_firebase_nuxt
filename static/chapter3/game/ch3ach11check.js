// displays megan cctv outcome

function outcome()

{

  var val = readVar("ch3megan_cctv");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch3ach11.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch3ach11_blank.jpg'>");

}

outcome();