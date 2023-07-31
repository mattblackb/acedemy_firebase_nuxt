// displays achievement outcome

function outcome()

{

  var val = readVar("ch11laura_watching");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11hotelach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11hotelach2_blank.jpg'>");

}

outcome();