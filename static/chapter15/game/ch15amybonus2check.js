// displays achievement outcome

function outcome()

{

  var val = readVar("ch15amy_orgasm");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15amybonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();