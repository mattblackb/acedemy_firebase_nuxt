// displays achievement outcome

function outcome()

{

  var val = readVar("ch12vixen_table");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12soloach20.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12soloach20_blank.jpg'>");

}

outcome();