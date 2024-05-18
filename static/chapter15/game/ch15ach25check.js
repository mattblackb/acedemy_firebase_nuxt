// displays achievement outcome

function outcome()

{

  var val = readVar("ch15exit_bridgette");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach25.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach25_blank.jpg'>");

}

outcome();