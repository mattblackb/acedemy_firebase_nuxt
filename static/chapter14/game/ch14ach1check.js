// displays achievement outcome

function outcome()

{

  var val = readVar("ch14start_bridgette");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach1_blank.jpg'>");

}

outcome();