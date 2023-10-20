// displays achievement outcome

function outcome()

{

  var val = readVar("ch12solo_vip");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12soloach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12soloach1_blank.jpg'>");

}

outcome();