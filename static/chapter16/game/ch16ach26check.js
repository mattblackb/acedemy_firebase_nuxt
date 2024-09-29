// displays achievement outcome

function outcome()

{

  var val = readVar("ch16seb_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach26.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach26_blank.jpg'>");

}

outcome();