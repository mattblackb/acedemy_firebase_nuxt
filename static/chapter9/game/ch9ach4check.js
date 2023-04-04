// displays pickup_talk outcome

function outcome()

{

  var val = readVar("ch9pickup_talk");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch9ach4.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch9ach4_blank.jpg'>");

}

outcome();