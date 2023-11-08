// displays achievement outcome

function outcome()

{

  var val = readVar("ch12didi_sapphire_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12sapphireach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();