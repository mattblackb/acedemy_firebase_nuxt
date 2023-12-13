// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_throat");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach18.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach18_blank.jpg'>");

}

outcome();