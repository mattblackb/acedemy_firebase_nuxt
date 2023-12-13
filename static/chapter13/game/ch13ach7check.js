// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bridgette_shower");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach7.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach7_blank.jpg'>");

}

outcome();