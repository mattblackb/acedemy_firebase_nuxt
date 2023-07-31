// displays achievement outcome

function outcome()

{

  var val = readVar("ch11brass_wine");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach3_blank.jpg'>");

}

outcome();