// displays achievement outcome

function outcome()

{

  var val = readVar("ch12vixen_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12soloach16.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12soloach16_blank.jpg'>");

}

outcome();