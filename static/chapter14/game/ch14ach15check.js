// displays achievement outcome

function outcome()

{

  var val = readVar("ch14caught_sebastian");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach15.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach15_blank.jpg'>");

}

outcome();