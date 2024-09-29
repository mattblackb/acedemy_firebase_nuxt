// displays achievement outcome

function outcome()

{

  var val = readVar("ch16twins_staffroom");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach25.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach25_blank.jpg'>");

}

outcome();