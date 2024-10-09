// displays achievement outcome

function outcome()

{

  var val = readVar("ch16dandb_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach17.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach17_blank.jpg'>");

}

outcome();