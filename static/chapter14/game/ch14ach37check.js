// displays achievement outcome

function outcome()

{

  var val = readVar("ch14meet_candidates");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach37.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach37_blank.jpg'>");

}

outcome();