// displays achievement outcome

function outcome()

{

  var val = readVar("ch16olivia_massage");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach30.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach30_blank.jpg'>");

}

outcome();