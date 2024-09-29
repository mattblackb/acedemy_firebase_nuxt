// displays achievement outcome

function outcome()

{

  var val = readVar("ch16deploy_usb");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach43.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach43_blank.jpg'>");

}

outcome();