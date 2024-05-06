// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_swim");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach7.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach7_blank.jpg'>");

}

outcome();