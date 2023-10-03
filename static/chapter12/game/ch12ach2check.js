// displays achievement outcome

function outcome()

{

  var val = readVar("ch12pink_cash");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach2_blank.jpg'>");

}

outcome();