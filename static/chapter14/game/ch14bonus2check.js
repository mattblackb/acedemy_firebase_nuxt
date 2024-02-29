// displays bonus outcome

function outcome()

{

  var val = readVar("ch14bonus2");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14bonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14bonus2_locked.jpg'>");

}

outcome();