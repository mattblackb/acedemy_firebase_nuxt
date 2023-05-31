// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solotest_pass");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach10.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach10_blank.jpg'>");

}

outcome();