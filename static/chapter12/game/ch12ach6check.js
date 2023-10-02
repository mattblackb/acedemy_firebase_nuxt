// displays achievement outcome

function outcome()

{

  var val = readVar("ch12dandb_arrives");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach6_blank.jpg'>");

}

outcome();