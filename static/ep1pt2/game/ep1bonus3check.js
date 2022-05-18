// displays bonus outcome

function outcome()

{

  var val = readVar("ep1annie_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1bonus3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1bonus3_blank.jpg'>");

}

outcome();