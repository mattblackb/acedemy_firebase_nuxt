// displays achievement outcome

function outcome()

{

  var val = readVar("ch14lola_facial");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14lolabonus6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();