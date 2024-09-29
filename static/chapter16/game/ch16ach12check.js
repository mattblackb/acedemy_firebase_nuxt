// displays achievement outcome

function outcome()

{

  var val = readVar("ch16jodie_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach12.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach12_blank.jpg'>");

}

outcome();