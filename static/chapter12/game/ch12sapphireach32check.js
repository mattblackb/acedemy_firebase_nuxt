// displays achievement outcome

function outcome()

{

  var val = readVar("ch12sapphire_cum_share");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12sapphireach32.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();