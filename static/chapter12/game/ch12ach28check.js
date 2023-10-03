// displays achievement outcome

function outcome()

{

  var val = readVar("ch12street_naked");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach28.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach28_blank.jpg'>");
}

outcome();