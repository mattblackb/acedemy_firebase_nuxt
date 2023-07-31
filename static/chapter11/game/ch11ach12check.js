// displays achievement outcome

function outcome()

{

  var val = readVar("ch11dirty_talk");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch11ach12.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch11ach12_blank.jpg'>");

}

outcome();