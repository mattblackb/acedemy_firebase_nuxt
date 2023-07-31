// displays achievement outcome

function outcome()

{

  var val = readVar("ch11caitlin_cum");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11restach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11restach5_blank.jpg'>");

}

outcome();