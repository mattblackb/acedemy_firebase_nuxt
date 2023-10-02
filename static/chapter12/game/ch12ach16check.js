// displays achievement outcome

function outcome()

{

  var val = readVar("ch12pink_accept");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach16.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach16_blank.jpg'>");
}

outcome();