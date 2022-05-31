// displays annie convo outcome

function outcome()

{

  var val = readVar("ch3annie_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch3ach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch3ach1_blank.jpg'>");

}

outcome();