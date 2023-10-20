// displays achievement outcome

function outcome()

{

  var val = readVar("ch12solo_valentine");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12soloach28.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12soloach28_blank.jpg'>");
}

outcome();