// displays achievement outcome

function outcome()

{

  var val = readVar("ch12pink_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach12.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach12_blank.jpg'>");

}

outcome();