// displays achievement outcome

function outcome()

{

  var val = readVar("ch12haven_handjob");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12havenach3.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();