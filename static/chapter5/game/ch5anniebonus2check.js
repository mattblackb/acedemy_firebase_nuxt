// displays annie_bonus outcome

function outcome()

{

  var val = readVar("ch5annie_missionary");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch5anniebonus2.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();