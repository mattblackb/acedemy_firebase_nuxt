// displays possession outcome

function outcome()

{

  var val = readVar("ch15have_folder");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15possession4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch15possession4_blank.jpg'>");

}

outcome();