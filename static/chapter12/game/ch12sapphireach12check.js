// displays achievement outcome

function outcome()

{

  var val = readVar("ch12didi_suck");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12sapphireach12.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();