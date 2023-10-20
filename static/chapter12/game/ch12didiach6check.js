// displays achievement outcome

function outcome()

{

  var val = readVar("ch12sapphire_perform");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12didiach6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12didiach6_blank.jpg'>");

}

outcome();