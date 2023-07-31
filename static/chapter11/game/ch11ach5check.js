// displays achievement outcome

function outcome()

{

  var val = readVar("ch11brass_beautiful");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach5_blank.jpg'>");

}

outcome();