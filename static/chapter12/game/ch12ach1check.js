// displays achievement outcome

function outcome()

{

  var val = readVar("ch12bridgette_vip");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach1_blank.jpg'>");

}

outcome();