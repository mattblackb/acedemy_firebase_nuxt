// displays achievement outcome

function outcome()

{

  var val = readVar("ch11female_restroom");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11restach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11restach3_blank.jpg'>");

}

outcome();