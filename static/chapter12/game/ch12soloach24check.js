// displays achievement outcome

function outcome()

{

  var val = readVar("ch12asuki_offer");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12soloach24.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12soloach24_blank.jpg'>");

}

outcome();