// displays jodiebonus outcome

function outcome()

{

  var val = readVar("ch4jodie_cum_face");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch4jodiebonus10.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();