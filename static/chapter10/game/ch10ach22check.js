// displays fight outcome

function outcome()

{

  var val = readVar("ch10win_fight");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10ach22.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10ach22_blank.jpg'>");

}

outcome();