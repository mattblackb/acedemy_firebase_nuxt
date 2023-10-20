// displays achievement outcome

function outcome()

{

  var val = readVar("ch12solo_didi");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12didiach1.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12didiach1_blank.jpg'>");

}

outcome();