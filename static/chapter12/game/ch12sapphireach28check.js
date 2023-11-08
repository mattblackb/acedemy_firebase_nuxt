// displays achievement outcome

function outcome()

{

  var val = readVar("ch12sapphire_cum_face");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12sapphireach28.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();