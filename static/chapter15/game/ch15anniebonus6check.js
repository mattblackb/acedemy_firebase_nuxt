// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_suck");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15anniebonus6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();