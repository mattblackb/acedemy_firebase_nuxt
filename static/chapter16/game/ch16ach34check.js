// displays achievement outcome

function outcome()

{

  var val = readVar("ch16natalia_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach34.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach34_blank.jpg'>");

}

outcome();