// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_cowgirl");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach19.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach19_blank.jpg'>");

}

outcome();