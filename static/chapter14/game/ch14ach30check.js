// displays achievement outcome

function outcome()

{

  var val = readVar("ch14jodie_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach30.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach30_blank.jpg'>");

}

outcome();