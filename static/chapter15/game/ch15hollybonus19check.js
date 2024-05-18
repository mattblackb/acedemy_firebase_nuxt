// displays achievement outcome

function outcome()

{

  var val = readVar("ch15holly_orgasm_cowgirl");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15hollybonus19.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();