// displays achievement outcome

function outcome()

{

  var val = readVar("ch16jodie_touch");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach13.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach13_blank.jpg'>");

}

outcome();