// displays achievement outcome

function outcome()

{

  var val = readVar("ch16ramsey_stop");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach20.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach20_blank.jpg'>");

}

outcome();