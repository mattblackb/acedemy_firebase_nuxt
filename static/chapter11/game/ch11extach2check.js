// displays achievement outcome

function outcome()

{

  var val = readVar("ch11ext_sandf");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11extach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11extach2_blank.jpg'>");

}

outcome();