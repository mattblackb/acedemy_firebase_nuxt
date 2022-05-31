// displays bonus outcome

function outcome()

{

  var val = readVar("ep1annie_cum");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1anniebonus4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();