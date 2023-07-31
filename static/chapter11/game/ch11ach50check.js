// displays achievement outcome

function outcome()

{

  var val = readVar("ch11alicia_exit");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach50.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach50_blank.jpg'>");

}

outcome();