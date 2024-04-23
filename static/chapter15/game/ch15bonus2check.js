// displays bonus outcome

function outcome()

{

  var val = readVar("ch15bonus2");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15bonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15bonus2_locked.jpg'>");

}

outcome();