// displays ch8have_medical outcome

function outcome()

{

  var val = readVar("ch8have_medical");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch8ach20.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch8ach20_blank.jpg'>");

}

outcome();