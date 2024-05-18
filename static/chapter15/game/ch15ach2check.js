// displays achievement outcome

function outcome()

{

  var val = readVar("ch15principal_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach2_blank.jpg'>");

}

outcome();