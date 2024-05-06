// displays achievement outcome

function outcome()

{

  var val = readVar("ch15annie_offer");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach3_blank.jpg'>");

}

outcome();