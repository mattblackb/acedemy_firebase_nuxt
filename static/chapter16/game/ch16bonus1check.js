// displays bonus outcome

function outcome()

{

  var val = readVar("ch16bonus1");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16bonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16bonus1_locked.jpg'>");

}

outcome();