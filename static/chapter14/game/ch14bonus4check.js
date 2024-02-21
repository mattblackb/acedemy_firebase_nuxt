// displays bonus outcome

function outcome()

{

  var val = readVar("ch14bonus4");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14bonus4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14bonus4_locked.jpg'>");

}

outcome();