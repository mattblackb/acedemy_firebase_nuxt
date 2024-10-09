// displays achievement outcome

function outcome()

{

  var val = readVar("ch16have_usb");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach42.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach42_blank.jpg'>");

}

outcome();