// displays bonus outcome

function outcome()

{

  var val = readVar("ep1jodie_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1bonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1bonus2_blank.jpg'>");

}

outcome();