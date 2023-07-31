// displays achievement outcome

function outcome()

{

  var val = readVar("ch11bridgette_dirty");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach7.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach7_blank.jpg'>");

}

outcome();