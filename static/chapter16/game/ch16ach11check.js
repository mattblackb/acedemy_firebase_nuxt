// displays achievement outcome

function outcome()

{

  var val = readVar("ch16jodie_office");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach11.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach11_blank.jpg'>");

}

outcome();