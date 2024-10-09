// displays achievement outcome

function outcome()

{

  var val = readVar("ch16hacked_laptop");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach50.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach50_blank.jpg'>");

}

outcome();