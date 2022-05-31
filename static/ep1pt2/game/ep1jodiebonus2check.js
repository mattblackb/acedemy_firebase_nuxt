// displays bonus outcome

function outcome()

{

  var val = readVar("ep1jodie_save");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1jodiebonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();