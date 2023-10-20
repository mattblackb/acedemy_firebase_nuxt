// displays achievement outcome

function outcome()

{

  var val = readVar("ch12vixen_positive");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12vixenach14.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();