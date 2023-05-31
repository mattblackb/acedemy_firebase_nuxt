// displays solo achievement outcome

function outcome()

{

  var val = readVar("ch10solocop_bribe");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10soloach9.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10soloach9_blank.jpg'>");

}

outcome();