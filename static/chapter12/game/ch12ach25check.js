// displays achievement outcome

function outcome()

{

  var val = readVar("ch12pink_cum");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach25.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach25_blank.jpg'>");
}

outcome();