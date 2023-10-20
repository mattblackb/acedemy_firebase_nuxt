// displays achievement outcome

function outcome()

{

  var val = readVar("ch12haven_dance");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12soloach12.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12soloach12_blank.jpg'>");

}

outcome();