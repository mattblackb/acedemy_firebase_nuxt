// displays achievement outcome

function outcome()

{

  var val = readVar("ch16dandb_positive");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach32.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach32_blank.jpg'>");

}

outcome();