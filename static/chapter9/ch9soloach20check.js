// displays solopark cash outcome

function outcome()

{

  var val = readVar("ch9solopark_cash");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch9soloach20.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch9soloach20_blank.jpg'>");

}

outcome();