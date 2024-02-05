// displays achievement outcome

function outcome()

{

  var val = readVar("ch14annie_meet");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach7.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach7_blank.jpg'>");

}

outcome();