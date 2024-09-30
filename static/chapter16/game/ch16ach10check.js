// displays achievement outcome

function outcome()

{

  var val = readVar("ch16jodie_hiding");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach10.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach10_blank.jpg'>");

}

outcome();