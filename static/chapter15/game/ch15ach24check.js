// displays achievement outcome

function outcome()

{

  var val = readVar("ch15exit_holly");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15ach24.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15ach24_blank.jpg'>");

}

outcome();