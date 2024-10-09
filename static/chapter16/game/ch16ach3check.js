// displays achievement outcome

function outcome()

{

  var val = readVar("ch16annie_call");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach3_blank.jpg'>");

}

outcome();