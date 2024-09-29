// displays achievement outcome

function outcome()

{

  var val = readVar("ch16caitlin_shower");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach28.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach28_blank.jpg'>");

}

outcome();