// displays achievement outcome

function outcome()

{

  var val = readVar("ch16olivia_convo");

	

    if ((val > 0)&&(val < 2))

        document.write("<img src='buttonsetc/endcards/ch16ach8_1.jpg'>"); 

    else
		
	if ((val > 1)&&(val < 3))

        document.write("<img src='buttonsetc/endcards/ch16ach8_2.jpg'>");
	
	else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach8_blank.jpg'>");

}

outcome();