// displays achievement outcome

function outcome()

{

  var val = readVar("ch14jodie_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach9.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach9_blank.jpg'>");

}

outcome();