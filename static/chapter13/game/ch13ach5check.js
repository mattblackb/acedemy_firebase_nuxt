// displays achievement outcome

function outcome()

{

  var val = readVar("ch13end_sleepy");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach5_blank.jpg'>");

}

outcome();