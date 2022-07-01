// displays shower bonus outcome

function outcome()

{

  var val = readVar("ch4girls_shower");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch4bonus1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch4bonus1_blank.jpg'>");

}

outcome();