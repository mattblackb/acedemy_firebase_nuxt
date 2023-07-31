// displays achievement outcome

function outcome()

{

  var val = readVar("ch11male_restroom");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11restach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11restach1_blank.jpg'>");

}

outcome();