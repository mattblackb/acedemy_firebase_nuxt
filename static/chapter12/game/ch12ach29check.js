// displays achievement outcome

function outcome()

{

  var val = readVar("ch12streak_home");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach29.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach29_blank.jpg'>");
}

outcome();