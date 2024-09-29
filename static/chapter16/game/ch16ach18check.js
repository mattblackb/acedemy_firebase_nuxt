// displays achievement outcome

function outcome()

{

  var val = readVar("ch16twins_change");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach18.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach18_blank.jpg'>");

}

outcome();