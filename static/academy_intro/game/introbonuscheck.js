// displays intro bonus outcome

function outcome()

{

  var val = readVar("natalia_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/introbonus.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/introbonus_blank.jpg'>");

}

outcome();