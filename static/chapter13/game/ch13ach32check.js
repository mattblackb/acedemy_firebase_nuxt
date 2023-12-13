// displays achievement outcome

function outcome()

{

  var val = readVar("ch13bedroom_knees_jerk");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch13ach32.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch13ach32_blank.jpg'>");

}

outcome();