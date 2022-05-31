// displays stop fight in studio outcome

function outcome()

{

  var val = readVar("ch3stop_fight");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch3ach17.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch3ach17_blank.jpg'>");

}

outcome();