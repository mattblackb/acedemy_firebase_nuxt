// displays achievement outcome

function outcome()

{

  var val = readVar("ch16jodie_stroke");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach6_blank.jpg'>");

}

outcome();