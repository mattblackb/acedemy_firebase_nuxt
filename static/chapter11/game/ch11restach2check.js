// displays achievement outcome

function outcome()

{

  var val = readVar("ch11brass_vend");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11restach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11restach2_blank.jpg'>");

}

outcome();