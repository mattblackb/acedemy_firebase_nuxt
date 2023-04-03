// displays bar bonus outcome

function outcome()

{

  var val = readVar("ch9barbonus_cum");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch9barbonusach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();