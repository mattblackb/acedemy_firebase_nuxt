// displays alexia flash outcome

function outcome()

{

  var val = readVar("ch9alexia_flash");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch9alxach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch9alxach3_blank.jpg'>");

}

outcome();