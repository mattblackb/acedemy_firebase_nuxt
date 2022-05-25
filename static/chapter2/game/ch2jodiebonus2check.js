// displays bonus outcome

function outcome()

{

  var val = readVar("ch2jodie_save");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch2jodiebonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();