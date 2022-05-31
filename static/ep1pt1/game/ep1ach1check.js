// displays talk to girls outcome

function outcome()

{

  var val = readVar("ep1talk_girls");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ep1ach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ep1ach1_blank.jpg'>");

}

outcome();