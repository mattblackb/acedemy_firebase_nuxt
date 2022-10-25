// displays jodie_bonus outcome

function outcome()

{

  var val = readVar("ch6jodie_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch6bonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch6bonus1_blank.jpg'>");

}

outcome();