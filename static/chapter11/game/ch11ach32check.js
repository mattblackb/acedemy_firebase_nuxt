// displays achievement outcome

function outcome()

{

  var val = readVar("ch11susie_dance");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach32.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach32_blank.jpg'>");

}

outcome();