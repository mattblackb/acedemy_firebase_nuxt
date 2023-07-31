// displays achievement outcome

function outcome()

{

  var val = readVar("ch11date_continue");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach6_blank.jpg'>");

}

outcome();