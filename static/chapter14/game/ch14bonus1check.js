// displays bonus outcome

function outcome()

{

  var val = readVar("ch14bonus1");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14bonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14bonus1_locked.jpg'>");

}

outcome();