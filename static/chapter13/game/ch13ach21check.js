// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_stroke_mouth");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach21.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach21_blank.jpg'>");

}

outcome();