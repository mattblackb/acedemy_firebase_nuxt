// displays achievement outcome

function outcome()

{

  var val = readVar("ch14start_hotel");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach3_blank.jpg'>");

}

outcome();