// displays achievement outcome

function outcome()

{

  var val = readVar("ch12dandb_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach13.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach13_blank.jpg'>");

}

outcome();