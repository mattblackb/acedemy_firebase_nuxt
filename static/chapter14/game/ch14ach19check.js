// displays achievement outcome

function outcome()

{

  var val = readVar("ch14lair_annie");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach19.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach19_blank.jpg'>");

}

outcome();