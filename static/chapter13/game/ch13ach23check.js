// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_ass_slap");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach23.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach23_blank.jpg'>");

}

outcome();