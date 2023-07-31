// displays achievement outcome

function outcome()

{

  var val = readVar("ch11brass_bridgette");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach1_blank.jpg'>");

}

outcome();