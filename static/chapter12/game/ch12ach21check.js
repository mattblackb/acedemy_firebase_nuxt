// displays achievement outcome

function outcome()

{

  var val = readVar("ch12pink_perform");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach21.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach21_blank.jpg'>");
}

outcome();