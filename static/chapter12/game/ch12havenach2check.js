// displays achievement outcome

function outcome()

{

  var val = readVar("ch12haven_orgasm");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12havenach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();