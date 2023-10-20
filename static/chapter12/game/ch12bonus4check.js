// displays bonus achievement outcome

function outcome()

{

  var val = readVar("ch12bonus4");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12bonus4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12bonus4_blank.jpg'>");

}

outcome();