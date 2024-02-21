// displays achievement outcome

function outcome()

{

  var val = readVar("ch14lola_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14bonus6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14bonus6_blank.jpg'>");

}

outcome();