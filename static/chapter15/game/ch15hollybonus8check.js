// displays achievement outcome

function outcome()

{

  var val = readVar("ch15holly_titjob");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15hollybonus8.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();