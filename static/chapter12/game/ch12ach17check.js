// displays achievement outcome

function outcome()

{

  var val = readVar("ch12pink_backstage");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach17.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach17_blank.jpg'>");
}

outcome();