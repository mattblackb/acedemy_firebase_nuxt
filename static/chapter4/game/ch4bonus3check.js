// displays holly bonus outcome

function outcome()

{

  var val = readVar("ch4holly_sex");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch4bonus3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch4bonus3_blank.jpg'>");

}

outcome();