// displays achievement outcome

function outcome()

{

  var val = readVar("ch14laura_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach4_blank.jpg'>");

}

outcome();