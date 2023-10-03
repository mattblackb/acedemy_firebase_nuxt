// displays achievement outcome

function outcome()

{

  var val = readVar("ch12pink_sex");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach24.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach24_blank.jpg'>");
}

outcome();