// displays achievement outcome

function outcome()

{

  var val = readVar("ch16maddison_convo");

	

    if (val > 0)

        document.write("<img src='buttonsetc/endcards/ch16ach7.jpg'>"); 

    else
	
	    document.write("<img src='buttonsetc/endcards/ch16ach7_blank.jpg'>");

}

outcome();