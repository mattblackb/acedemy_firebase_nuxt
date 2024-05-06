// displays achievement outcome

function outcome()

{

  var val = readVar("ch15holly_cum_mouth");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15hollybonus17.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();