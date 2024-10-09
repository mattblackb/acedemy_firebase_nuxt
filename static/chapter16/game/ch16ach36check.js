// displays achievement outcome

function outcome()

{

  var val = readVar("ch16meet_maddison");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach36.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach36_blank.jpg'>");

}

outcome();