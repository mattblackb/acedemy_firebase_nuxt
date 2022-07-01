// displays jodiebonus outcome

function outcome()

{

  var val = readVar("ch4jodie_cum_mouth");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch4jodiebonus12.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();