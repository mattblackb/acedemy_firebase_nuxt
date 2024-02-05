// displays achievement outcome

function outcome()

{

  var val = readVar("ch14help_girls");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach11.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach11_blank.jpg'>");

}

outcome();