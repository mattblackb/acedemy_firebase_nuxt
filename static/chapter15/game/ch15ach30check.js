// displays achievement outcome

function outcome()

{

  var val = readVar("ch15amy_cum_facial");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach30.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach30_blank.jpg'>");

}

outcome();