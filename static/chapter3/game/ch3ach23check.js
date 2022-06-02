// displays annie suggestion in studio outcome

function outcome()

{

  var val = readVar("ch3annie_poses");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch3ach23.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch3ach23_blank.jpg'>");

}

outcome();