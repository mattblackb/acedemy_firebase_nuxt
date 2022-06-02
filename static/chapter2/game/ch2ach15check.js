// displays cctv lola outcome

function outcome()

{

  var val = readVar("ch2cctv_lola");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch2ach15.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch2ach15_blank.jpg'>");

}

outcome();