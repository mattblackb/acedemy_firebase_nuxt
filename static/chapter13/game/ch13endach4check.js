// displays achievement outcome

function outcome()

{

  var val = readVar("ch13end_didi_sleep");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13endach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13endach4_blank.jpg'>");

}

outcome();