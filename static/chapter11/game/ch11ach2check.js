// displays achievement outcome

function outcome()

{

  var val = readVar("ch11brass_date");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach2_blank.jpg'>");

}

outcome();