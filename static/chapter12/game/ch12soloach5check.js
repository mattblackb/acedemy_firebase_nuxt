// displays achievement outcome

function outcome()

{

  var val = readVar("ch12solo_amandla");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12soloach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12soloach5_blank.jpg'>");

}

outcome();