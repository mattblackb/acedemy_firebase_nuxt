// displays achievement outcome

function outcome()

{

  var val = readVar("ch12dandb_champagne");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach10.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach10_blank.jpg'>");

}

outcome();