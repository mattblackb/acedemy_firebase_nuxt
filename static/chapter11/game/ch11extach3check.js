// displays achievement outcome

function outcome()

{

  var val = readVar("ch11ext_aands");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11extach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11extach3_blank.jpg'>");

}

outcome();