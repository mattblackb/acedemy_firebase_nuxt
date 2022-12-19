// displays ch7_achievement outcome

function outcome()

{

  var val = readVar("ch7jodie_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch7ach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch7ach1_blank.jpg'>");

}

outcome();