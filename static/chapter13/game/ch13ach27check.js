// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_missionary");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach27.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach27_blank.jpg'>");

}

outcome();