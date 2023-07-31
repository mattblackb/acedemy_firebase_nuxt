// displays achievement outcome

function outcome()

{

  var val = readVar("ch11laura_woke");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11hotelach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11hotelach4_blank.jpg'>");

}

outcome();