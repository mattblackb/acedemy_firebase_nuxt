// displays achievement outcome

function outcome()

{

  var val = readVar("ch12haven_perform");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12soloach11.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12soloach11_blank.jpg'>");

}

outcome();