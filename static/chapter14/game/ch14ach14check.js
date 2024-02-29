// displays achievement outcome

function outcome()

{

  var val = readVar("ch14caught_annie");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach14.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach14_blank.jpg'>");

}

outcome();