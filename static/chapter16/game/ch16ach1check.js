// displays achievement outcome

function outcome()

{

  var val = readVar("ch16bridgette_key");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach1_blank.jpg'>");

}

outcome();