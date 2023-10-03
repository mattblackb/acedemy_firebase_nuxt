// displays bonus achievement outcome

function outcome()

{

  var val = readVar("ch12bonus1");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12bonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12bonus1_blank.jpg'>");

}

outcome();