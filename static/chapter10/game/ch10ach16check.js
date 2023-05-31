// displays withdraw_cash outcome

function outcome()

{

  var val = readVar("ch10withdraw_cash");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10ach16.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10ach16_blank.jpg'>");

}

outcome();