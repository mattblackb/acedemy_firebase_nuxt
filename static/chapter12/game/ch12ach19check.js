// displays achievement outcome

function outcome()

{

  var val = readVar("ch12pink_outfits");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach19.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach19_blank.jpg'>");
}

outcome();