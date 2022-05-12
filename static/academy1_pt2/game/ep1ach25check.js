// displays jodie agree outcome

function outcome()

{

  var val = readVar("ep1jodie_agree");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach25.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach25_blank.jpg'>");

}

outcome();