// displays achievement outcome

function outcome()

{

  var val = readVar("ch15canteen_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach33.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach33_blank.jpg'>");

}

outcome();