// displays achievement outcome

function outcome()

{

  var val = readVar("ch11ext_leave");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11extach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11extach5_blank.jpg'>");

}

outcome();