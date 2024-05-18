// displays achievement outcome

function outcome()

{

  var val = readVar("ch15amy_cum_oral");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach29.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach29_blank.jpg'>");

}

outcome();