// displays barmaid outcome

function outcome()

{

  var val = readVar("drink_tip");

	

    if (val > 1)

        document.write("<img src='buttonsetc/endcards/ach35.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach35_blank.jpg'>");

}

outcome();