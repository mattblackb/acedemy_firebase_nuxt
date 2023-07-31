// displays achievement outcome

function outcome()

{

  var val = readVar("ch11brass_champagne");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach4_blank.jpg'>");

}

outcome();