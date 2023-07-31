// displays achievement outcome

function outcome()

{

  var val = readVar("ch11ext_bridgette");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11extach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11extach1_blank.jpg'>");

}

outcome();