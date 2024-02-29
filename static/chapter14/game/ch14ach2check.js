// displays achievement outcome

function outcome()

{

  var val = readVar("ch14morning_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach2_blank.jpg'>");

}

outcome();