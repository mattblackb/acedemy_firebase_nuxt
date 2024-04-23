// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_rimming");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15anniebonus7.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();