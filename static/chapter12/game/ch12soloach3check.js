// displays achievement outcome

function outcome()

{

  var val = readVar("ch12pink_solo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12soloach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12soloach3_blank.jpg'>");

}

outcome();