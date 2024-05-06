// displays achievement outcome

function outcome()

{

  var val = readVar("ch15visit_annie");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach1_blank.jpg'>");

}

outcome();