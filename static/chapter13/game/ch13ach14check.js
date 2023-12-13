// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_balls");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach14.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach14_blank.jpg'>");

}

outcome();