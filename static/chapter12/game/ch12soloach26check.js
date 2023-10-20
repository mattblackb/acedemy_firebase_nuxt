// displays achievement outcome

function outcome()

{

  var val = readVar("ch12cherry_drink");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12soloach26.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12soloach26_blank.jpg'>");

}

outcome();