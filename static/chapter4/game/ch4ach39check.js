// displays jodie_flirt outcome

function outcome()

{

  var val = readVar("ch4jodie_flirt");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch4ach39.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch4ach39_blank.jpg'>");

}

outcome();