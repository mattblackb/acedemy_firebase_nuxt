// displays bonus achievement outcome

function outcome()

{

  var val = readVar("ch12bonus5");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12bonus5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12bonus5_blank.jpg'>");

}

outcome();