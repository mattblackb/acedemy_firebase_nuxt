// displays achievement outcome

function outcome()

{

  var val = readVar("ch14explore_lair");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach16.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach16_blank.jpg'>");

}

outcome();