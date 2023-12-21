// displays achievement outcome

function outcome()

{

  var val = readVar("ch13threesome_invite");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13threesomeach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13threesomeach1_blank.jpg'>");

}

outcome();