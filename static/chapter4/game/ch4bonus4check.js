// displays exit jodie bonus outcome

function outcome()

{

  var val = readVar("ch4jodie_sex");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch4bonus4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch4bonus4_blank.jpg'>");

}

outcome();