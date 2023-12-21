// displays achievement outcome

function outcome()

{

  var val = readVar("ch13end_bridgette_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13endach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13endach1_blank.jpg'>");

}

outcome();