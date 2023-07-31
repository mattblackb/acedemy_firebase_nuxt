// displays achievement outcome

function outcome()

{

  var val = readVar("ch11brass_cocktails");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach14.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach14_blank.jpg'>");

}

outcome();