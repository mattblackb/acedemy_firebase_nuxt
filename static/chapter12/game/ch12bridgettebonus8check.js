// displays bonus achievement outcome

function outcome()

{

  var val = readVar("ch12bridgettebonus_spank");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12bridgettebonus8.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ach_blank.jpg'>");

}

outcome();