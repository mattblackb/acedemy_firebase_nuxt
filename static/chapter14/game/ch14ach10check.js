// displays achievement outcome

function outcome()

{

  var val = readVar("ch14bridgette_kiss");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach10.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach10_blank.jpg'>");

}

outcome();