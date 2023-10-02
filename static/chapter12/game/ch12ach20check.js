// displays achievement outcome

function outcome()

{

  var val = readVar("ch12pink_valentine");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach20.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach20_blank.jpg'>");
}

outcome();