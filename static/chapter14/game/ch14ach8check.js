// displays achievement outcome

function outcome()

{

  var val = readVar("ch14breakfast_key");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch14ach8.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch14ach8_blank.jpg'>");

}

outcome();