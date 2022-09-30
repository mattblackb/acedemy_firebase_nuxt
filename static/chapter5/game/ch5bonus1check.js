// displays annie_bonus outcome

function outcome()

{

  var val = readVar("ch5annie_bonus");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch5bonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch5bonus1_blank.jpg'>");

}

outcome();