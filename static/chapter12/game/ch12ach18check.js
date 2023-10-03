// displays achievement outcome

function outcome()

{

  var val = readVar("ch12pink_naked");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach18.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach18_blank.jpg'>");
}

outcome();