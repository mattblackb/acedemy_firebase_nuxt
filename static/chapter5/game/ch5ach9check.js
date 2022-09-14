// displays hidden_cam outcome

function outcome()

{

  var val = readVar("ch5hidden_cam");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch5ach9.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch5ach9_blank.jpg'>");

}

outcome();