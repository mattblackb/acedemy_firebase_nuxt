// displays achievement outcome

function outcome()

{

  var val = readVar("ch13apart_normal");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach1_blank.jpg'>");

}

outcome();