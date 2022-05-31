// displays workout canteen outcome

function outcome()

{

  var val = readVar("ep1workout_canteen");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach24.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach24_blank.jpg'>");

}

outcome();