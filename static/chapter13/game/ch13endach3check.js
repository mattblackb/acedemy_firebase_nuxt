// displays achievement outcome

function outcome()

{

  var val = readVar("ch13end_bridgette_sleep");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13endach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13endach3_blank.jpg'>");

}

outcome();