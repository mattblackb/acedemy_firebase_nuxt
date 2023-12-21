// displays achievement outcome

function outcome()

{

  var val = readVar("ch13end_bridgette_sleep");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13endach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13endach2_blank.jpg'>");

}

outcome();