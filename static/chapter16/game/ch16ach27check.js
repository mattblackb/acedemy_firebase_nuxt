// displays achievement outcome

function outcome()

{

  var val = readVar("ch16caitlin_intro");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach27.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach27_blank.jpg'>");

}

outcome();