// displays achievement outcome

function outcome()

{

  var val = readVar("ch14hotel_maid");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach5.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach5_blank.jpg'>");

}

outcome();