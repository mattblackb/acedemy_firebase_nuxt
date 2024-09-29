// displays achievement outcome

function outcome()

{

  var val = readVar("ch16twins_game");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach19.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach19_blank.jpg'>");

}

outcome();