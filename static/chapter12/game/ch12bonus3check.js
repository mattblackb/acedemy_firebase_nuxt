// displays bonus achievement outcome

function outcome()

{

  var val = readVar("ch12bonus3");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12bonus3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12bonus3_blank.jpg'>");

}

outcome();