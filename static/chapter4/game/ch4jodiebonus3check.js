// displays jodiebonus outcome

function outcome()

{

  var val = readVar("ch4jodie_slapass");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch4jodiebonus3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();