// displays achievement outcome

function outcome()

{

  var val = readVar("ch16staff_key");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach14.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach14_blank.jpg'>");

}

outcome();