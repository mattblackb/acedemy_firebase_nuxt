// displays achievement outcome

function outcome()

{

  var val = readVar("ch12didi_cash");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12didiach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12didiach2_blank.jpg'>");

}

outcome();