// displays achievement outcome

function outcome()

{

  var val = readVar("ch11laura_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach28.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach28_blank.jpg'>");

}

outcome();