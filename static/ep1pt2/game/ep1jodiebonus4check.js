// displays bonus outcome

function outcome()

{

  var val = readVar("ep1jodie_cum");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1jodiebonus4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();