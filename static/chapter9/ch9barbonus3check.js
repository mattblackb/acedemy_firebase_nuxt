// displays bar bonus outcome

function outcome()

{

  var val = readVar("ch9barbonus_tits");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch9barbonusach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();