// displays bonus outcome

function outcome()

{

  var val = readVar("ch15bonus4");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15bonus4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15bonus4_locked.jpg'>");

}

outcome();