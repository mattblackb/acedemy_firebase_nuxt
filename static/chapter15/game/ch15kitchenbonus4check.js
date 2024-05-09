// displays achievement outcome

function outcome()

{

  var val = readVar("ch15kitchen_facial");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch15kitchenbonus4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();