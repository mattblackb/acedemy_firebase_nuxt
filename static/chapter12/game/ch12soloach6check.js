// displays achievement outcome

function outcome()

{

  var val = readVar("ch12aphrodite_perform");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12soloach6.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12soloach6_blank.jpg'>");

}

outcome();