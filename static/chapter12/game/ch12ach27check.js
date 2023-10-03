// displays achievement outcome

function outcome()

{

  var val = readVar("ch12win_fight");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch12ach27.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch12ach27_blank.jpg'>");
}

outcome();