// displays ch8principal_loyalty outcome

function outcome()

{

  var val = readVar("ch8principal_loyalty");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch8principalbonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();