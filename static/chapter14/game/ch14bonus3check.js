// displays bonus outcome

function outcome()

{

  var val = readVar("ch14bonus3");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14bonus3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14bonus3_locked.jpg'>");

}

outcome();