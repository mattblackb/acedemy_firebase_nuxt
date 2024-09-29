// displays achievement outcome

function outcome()

{

  var val = readVar("ch16ramsey_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach33.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach33_blank.jpg'>");

}

outcome();