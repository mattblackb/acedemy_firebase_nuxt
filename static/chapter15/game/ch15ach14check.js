// displays achievement outcome

function outcome()

{

  var val = readVar("ch15holly_upset");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach14.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach14_blank.jpg'>");

}

outcome();