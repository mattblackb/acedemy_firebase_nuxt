// displays bonus outcome

function outcome()

{

  var val = readVar("ch14bonus5");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14bonus5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14bonus5_locked.jpg'>");

}

outcome();