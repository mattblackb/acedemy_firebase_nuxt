// displays bridgette pickup outcome

function outcome()

{

  var val = readVar("ch9bridgette_pickup");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch9ach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch9ach2_blank.jpg'>");

}

outcome();