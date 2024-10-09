// displays achievement outcome

function outcome()

{

  var val = readVar("ch16valentine_arrives");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach41.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach41_blank.jpg'>");

}

outcome();