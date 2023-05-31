// displays cop bribe outcome

function outcome()

{

  var val = readVar("ch10cop_bribe");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch10ach17.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch10ach17_blank.jpg'>");

}

outcome();